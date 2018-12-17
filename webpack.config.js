const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
      aws: 'aws-sdk'
  },
  target: "node"
};