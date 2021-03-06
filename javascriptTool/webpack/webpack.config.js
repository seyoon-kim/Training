module.exports = {
  entry: './src/main.js',
  output: {
    path:__dirname+ '/dist/',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: '/node_modules',
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }

};
