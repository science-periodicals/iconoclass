const path = require("path");
const { babel } = require("./package.json");

module.exports = [
  {
    target: "web",
    entry: ["./src/iconoclass.js"],
    output: {
      filename: "iconoclass.js",
      path: path.resolve(__dirname, "dist/")
    },
    module: {
      rules: [
        // CSS
        {
          test: /\.css$/,
          sideEffects: true,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: function(loader) {
                  return [
                    require("postcss-import")({
                      root: "./src/iconoclass.css"
                    }),
                    require("postcss-url")(),
                    require("postcss-preset-env")({
                      browsers: "last 2 versions",
                      stage: 3,
                      features: {
                        "nesting-rules": false /* disable css nesting which does not allow nesting of selectors without white spaces between them */,
                        "custom-media-queries": true
                      }
                    }),
                    require("postcss-nested") /*replace cssnext nesting with this one which allows for sass style nesting*/,
                    require("postcss-reporter")({
                      clearAllMessages: false
                    })
                  ];
                }
              }
            }
          ],
          include: [path.resolve(__dirname, "dist")]
        }
      ]
    }
  }
];
