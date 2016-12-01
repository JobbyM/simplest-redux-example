module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: './'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }
}
