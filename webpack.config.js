const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    path: path.join(__dirname, "dist"),
    open: true,
    openPage: 'index.html',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: 8080,
  },
  entry: {app: './src/index.js'},
  output: {
    publicPath: '/js/',
    filename: '[name].js',
    library: ['com', 'example'],
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                "useBuiltIns": "usage",
                "targets": "> 0.25%, not dead"
                }
              ]
            ]
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map'
};
