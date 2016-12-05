var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/main',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
    root: path.resolve(__dirname),
    alias: {
      containers: 'src/Containers',
      reducers: 'src/Reducers',
      components: 'src/Components',
      actions: 'src/Actions/actions',
      models: 'src/Models'
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