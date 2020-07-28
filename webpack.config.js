const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new Dotenv()],
};
