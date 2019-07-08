"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var svg2jsx = function svg2jsx(dir, outDir) {
  var needle = ".svg";
  var svgWhiteList = ["rect", "path", "polygon", "circle", "ellipse", "line", "g", "/g"];
  var rePx = new RegExp("\\d\\d(?=px)");

  if (!_fs.default.existsSync(dir)) {
    return console.log("Directory " + dir + " does not exist.");
  }

  if (!_fs.default.existsSync(outDir)) {
    return console.log("Directory " + outDir + " does not exist.");
  }

  var allIconsOut = _fs.default.createWriteStream(outDir + "/icons.js", {
    encoding: "utf8"
  });

  allIconsOut.write("import React from 'react';\n /*test1*/ \n");

  var allIconNamesOut = _fs.default.createWriteStream(outDir + "/iconNames.js", {
    encoding: "utf8"
  });

  var iconNames = [];

  var haystack = _fs.default.readdirSync(dir);

  for (var s = 0; s < haystack.length; s++) {
    var path = dir + "/" + haystack[s];

    var stats = _fs.default.statSync(path);

    if (stats.isDirectory()) {
      process(path);
    } else if (path.indexOf(needle) >= 0) {
      console.log(path);

      var svgData = _fs.default.readFileSync(path, "utf8");

      svgData = svgData.replace(/stroke-width/g, "strokeWidth");
      svgData = svgData.replace(/stroke-linecap/g, "strokeLinecap");
      svgData = svgData.replace(/stroke-miterlimit/g, "strokeMiterlimit");
      svgData = svgData.replace(/fill-opacity/g, "fillOpacity");
      svgData = svgData.replace(/clip-path/g, "clipPath");
      svgData = svgData.replace(/fill-rule/g, "fillRule"); //console.log('svgData: ', svgData);

      var inFileName = _path.default.basename(path);

      var iconName = inFileName.replace("icon_", "");
      iconName = iconName.replace(/(_\d\dpx\.svg)/, "");
      iconName = camelCase(iconName);

      if (iconNames[iconNames.length - 1] !== iconName) {
        iconNames.push(iconName);
      } // the size of the svg derived from the file name


      var pxSize = rePx.exec(inFileName);
      pxSize = pxSize ? pxSize[0] : "";
      var outFileName = "icon_" + iconName + "_" + pxSize + "px.js";
      console.log(iconName + pxSize); // get orginal svg's viewbox

      var viewBox = "0 0 " + pxSize + " " + pxSize;
      var srcViewBox = svgData.match(/viewBox=['"](\d* \d* \d* \d*)['"]/);

      if (srcViewBox) {
        viewBox = srcViewBox[1];
      } //console.log('viewBox: ', viewBox);


      var iconSizeName = "".concat(iconName).concat(pxSize);
      var translatedSvg = "";
      svgData.split(/\r?\n/).forEach(function (line) {
        if (isOnWhiteList(line, svgWhiteList)) {
          console.log(line); // if the svg elements has an opacity set, do not replace the color

          if (line.indexOf("opacity") === -1) {
            line = line.replace(/fill=['"]#([0-9A-Fa-f]{1,2}){3}['"]/g, "className='iconoclass__fill' fill={props.round ? 'black' : 'currentColor'}");
            line = line.replace(/stroke=['"]#([0-9A-Fa-f]{1,2}){3}['"]/g, "className='iconoclass__stroke' stroke={props.round ? 'black' : 'currentColor'}");
          } else {
            console.log('Found "opacity" - Not changing color in: ', line);
          } // jsxOut.write(line + "\n");
          // allIconsOut.write(line + "\n");


          translatedSvg += "".concat(line, "\n");
        }
      });
      var templateStart = "\n\t\t\t\texport function ".concat(iconSizeName, "(props){\n\t\t\t\t\tconst renderTranslatedSvg = () => {\n\t\t\t\t\t\treturn (<React.Fragment>").concat(translatedSvg, "</React.Fragment>);\n\t\t\t\t\t}\n\n\t\t\t\t\treturn(\n\t\t\t\t\t\t<svg className='iconoclass__svg iconoclass__fill' \n\t\t\t\t\t\t\tstyle={{position: 'absolute', top:'0', left:'0' }} \n\t\t\t\t\t\t\tpreserveAspectRatio='xMidYMin' color={props.color ? props.color : 'currentColor'} \n\t\t\t\t\t\t\tfill='currentColor' viewBox={props.round ? '0 0 24 24' : '").concat(viewBox, "'} width={props.size} height={props.size}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{props.round  \n\t\t\t\t\t\t\t\t? (<g>\n\t\t\t\t\t\t\t\t\t\t<circle cx=\"50%\" cy=\"50%\" r=\"50%\" fill={props.color} mask=\"url(#").concat(iconName, "_mask)\"/>\n\t\t\t\t\t\t\t\t\t\t<mask id=\"").concat(iconName, "_mask\">\n\t\t\t\t\t\t\t\t\t\t\t<rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"white\" />\n\t\t\t\t\t\t\t\t\t\t\t<svg x=\"16.66%\" y=\"16.66%\" width=\"66%\" height=\"66%\" viewBox='").concat(viewBox, "' color={props.round ? 'black' : 'currentColor'}>\n\t\t\t\t\t\t\t\t\t\t\t\t{renderTranslatedSvg()}\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</mask>\n\t\t\t\t\t\t\t\t\t</g>)\n\t\t\t\t\t\t\t\t: (\n\t\t\t\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t\t\t\t{renderTranslatedSvg()}\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t");
      var templateEnd = ""; // each icon is converted to individual jsx file for individual imports

      var jsxOut = _fs.default.createWriteStream(outDir + "/" + outFileName, {
        encoding: "utf8"
      });

      jsxOut.write("import React from 'react';\n" + templateStart); // all the icons combined for a single import

      allIconsOut.write(templateStart); //jsxOut.write(translatedSvg);
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
  whiteList.forEach(function (svgEnt) {
    var re = new RegExp("<" + svgEnt + "(.*)>");
    if (re.test(svgString)) result = true;
  });
  return result;
}

function camelCase(input) {
  var result = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
  return result.replace(/_(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
} // svg input path, jsx output path, search string


svg2jsx(process.argv[2], process.argv[3]);

//# sourceMappingURL=svg2jsx.bundle.js.map