const path = require('path');

module.exports = {

  entry: './src/main/js/index.js',
  output: {
    /*path: __dirname,
    filename: './src/main/resources/static/built/bundle.js'*/
    path: path.join(__dirname, '/src/main/resources/static/built'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  /*devServer: {
    hot: true,
    contentBase: './',
    historyApiFallback: true
  },*/
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      }
    ]
  },
}