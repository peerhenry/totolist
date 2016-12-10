var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/Main',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
    root: path.resolve(__dirname),
    alias: {
      form: 'src/Form',
      page: 'src/Page',
      todos: 'src/Todos'
    }
  },

  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader',
      exclude: '/node_modules'
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      },
      exclude: '/node_modules'
    }],

    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'source-map-loader'
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'immutable': 'Immutable',
    'redux-thunk': 'ReduxThunk'
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'src/template.html'
  })],

  devServer: {
    contentBase: "./build/",
    inline: true,
    stats: {
      colors: true
    }
  }
};