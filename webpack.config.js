const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'worker.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  target: 'webworker',
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: {
    'node:fs': 'commonjs node:fs',
    'node:path': 'commonjs node:path'
  }
};