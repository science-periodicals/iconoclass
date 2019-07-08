const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { babel } = require("./package.json");
const isProd = process.env.NODE_ENV === "production";

console.log("Webpack building with NODE_ENV", process.env.NODE_ENV);

module.exports = {
  target: "web",
  entry: "./example-src/example.js",
  mode: isProd ? "production" : "development",
  output: {
    filename: "example.js",
    path: path.resolve(__dirname, "example-dist/")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: babel.presets,
              plugins: babel.plugins
            }
          }
        ]
      },
      // CSS
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          {
            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
          },
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
                    root: "./example-src/example.css"
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
        include: [path.resolve(__dirname, "example")]
      }
    ]
  },
  plugins: [
    isProd
      ? new MiniCssExtractPlugin({
          filename: "example.css"
        })
      : null
  ].filter(Boolean)
};
