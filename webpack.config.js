const nodeExternals = require("webpack-node-externals");

module.exports = {
  // Other Webpack configuration options...
  externals: [nodeExternals()],
};
