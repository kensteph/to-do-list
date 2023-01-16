const path = require('path');
// Plugin to generate the html file automatically using a template
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  // DEV SERVER
  devServer: {
    // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
    static: './dist',
    // If you want to automactically launch the browser
    open: true,
    hot: true,
  },
  // Manage the loaders
  module: {
    rules: [
      // CSS rules
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Assets or img rules
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  //  Use of the plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
