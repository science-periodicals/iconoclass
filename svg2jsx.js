import fs from "fs";
import nodePath from "path";

const svg2jsx = function(dir, outDir) {
  var needle = ".svg";

  const svgWhiteList = [
    "rect",
    "path",
    "polygon",
    "circle",
    "ellipse",
    "line",
    "g",
    "/g"
  ];

  const rePx = new RegExp("\\d\\d(?=px)");

  if (!fs.existsSync(dir)) {
    return console.log("Directory " + dir + " does not exist.");
  }
  if (!fs.existsSync(outDir)) {
    return console.log("Directory " + outDir + " does not exist.");
  }

  const allIconsOut = fs.createWriteStream(outDir + "/icons.js", {
    encoding: "utf8"
  });

  allIconsOut.write("import React from 'react';\n /*test1*/ \n");

  const allIconNamesOut = fs.createWriteStream(outDir + "/iconNames.js", {
    encoding: "utf8"
  });

  let iconNames = [];

  const haystack = fs.readdirSync(dir);

  for (var s = 0; s < haystack.length; s++) {
    let path = dir + "/" + haystack[s];
    let stats = fs.statSync(path);

    if (stats.isDirectory()) {
      process(path);
    } else if (path.indexOf(needle) >= 0) {
      console.log(path);

      var svgData = fs.readFileSync(path, "utf8");

      svgData = svgData.replace(/stroke-width/g, "strokeWidth");
      svgData = svgData.replace(/stroke-linecap/g, "strokeLinecap");
      svgData = svgData.replace(/stroke-miterlimit/g, "strokeMiterlimit");
      svgData = svgData.replace(/fill-opacity/g, "fillOpacity");
      svgData = svgData.replace(/clip-path/g, "clipPath");
      svgData = svgData.replace(/fill-rule/g, "fillRule");

      //console.log('svgData: ', svgData);

      const inFileName = nodePath.basename(path);

      let iconName = inFileName.replace("icon_", "");

      iconName = iconName.replace(/(_\d\dpx\.svg)/, "");
      iconName = camelCase(iconName);

      if (iconNames[iconNames.length - 1] !== iconName) {
        iconNames.push(iconName);
      }

      // the size of the svg derived from the file name
      let pxSize = rePx.exec(inFileName);
      pxSize = pxSize ? pxSize[0] : "";

      const outFileName = "icon_" + iconName + "_" + pxSize + "px.js";

      console.log(iconName + pxSize);

      // get orginal svg's viewbox
      var viewBox = "0 0 " + pxSize + " " + pxSize;
      var srcViewBox = svgData.match(/viewBox=['"](\d* \d* \d* \d*)['"]/);
      if (srcViewBox) {
        viewBox = srcViewBox[1];
      }

      //console.log('viewBox: ', viewBox);

      const iconSizeName = `${iconName}${pxSize}`;

      let translatedSvg = "";

      svgData.split(/\r?\n/).forEach(function(line) {
        if (isOnWhiteList(line, svgWhiteList)) {
          console.log(line);

          // if the svg elements has an opacity set, do not replace the color
          if (line.indexOf("opacity") === -1) {
            line = line.replace(
              /fill=['"]#([0-9A-Fa-f]{1,2}){3}['"]/g,
              "className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}"
            );
            line = line.replace(
              /stroke=['"]#([0-9A-Fa-f]{1,2}){3}['"]/g,
              "className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'}"
            );
          } else {
            console.log('Found "opacity" - Not changing color in: ', line);
          }
          // jsxOut.write(line + "\n");
          // allIconsOut.write(line + "\n");
          translatedSvg += `${line}\n`;
        }
      });

      let templateStart = `
				export function ${iconSizeName}(props){
					const renderTranslatedSvg = () => {
						return (<React.Fragment>${translatedSvg}</React.Fragment>);
					}

					return(
						<svg className='iconoclass__svg iconoclass__fill' 
							style={{position: 'absolute', top:'0', left:'0' }} 
							preserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} 
							fill='currentColor' viewBox={props.round ? '0 0 24 24' : '${viewBox}'} width={props.size} height={props.size}
						>
							{props.round  
								? (<g>
										<circle cx="50%" cy="50%" r="50%" fill={props.color} mask="url(#${iconName}_mask)"/>
										<mask id="${iconName}_mask">
											<rect x="0" y="0" width="100%" height="100%" fill="white" />
											<svg x="16.66%" y="16.66%" width="66%" height="66%" viewBox='${viewBox}' color={props.round ? 'black' : 'currentColor'}>
												{renderTranslatedSvg()}
											</svg>
										</mask>
									</g>)
								: (
									<g>
										{renderTranslatedSvg()}
									</g>
								)
							}
						</svg>
					)
				}
			`;

      const templateEnd = "";

      // each icon is converted to individual jsx file for individual imports
      var jsxOut = fs.createWriteStream(outDir + "/" + outFileName, {
        encoding: "utf8"
      });

      jsxOut.write(`import React from 'react';\n` + templateStart);

      // all the icons combined for a single import
      allIconsOut.write(templateStart);

      //jsxOut.write(translatedSvg);
      //allIconsOut.write(translatedSvg);

      jsxOut.write(templateEnd);
      allIconsOut.write(templateEnd);
      jsxOut.end();
    }
  }
  console.log("names: ", JSON.stringify(iconNames));
  allIconNamesOut.write("export default " + JSON.stringify(iconNames));
  allIconNamesOut.end();
  allIconsOut.end();
};

function isOnWhiteList(svgString, whiteList) {
  var result = false;
  whiteList.forEach(function(svgEnt) {
    var re = new RegExp("<" + svgEnt + "(.*)>");
    if (re.test(svgString)) result = true;
  });
  return result;
}

function camelCase(input) {
  var result = input.toLowerCase().replace(/-(.)/g, function(match, group1) {
    return group1.toUpperCase();
  });
  return result.replace(/_(.)/g, function(match, group1) {
    return group1.toUpperCase();
  });
}
// svg input path, jsx output path, search string
svg2jsx(process.argv[2], process.argv[3]);
