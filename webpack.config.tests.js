var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: './test/test',

  output: {
    path: './',
    filename: 'test/testbundle.js'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
    root: path.resolve(__dirname),
    alias: {
      containers: 'src/Containers',
      reducers: 'src/Reducers',
      components: 'src/Components',
      actions: 'src/Actions/Actions',
      models: 'src/Models'
    }
  },

  module: {
    loaders: [{
      test: /\.tsx?$/,
      //loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader',
      loader: 'ts-loader',
      exclude: '/node_modules'
    }/*,
    {
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      },
      exclude: '/node_modules'
    }*/
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux',
    'mocha': 'Mocha',
    'enzyme': 'Enzyme',
    'chai': 'Chai',
    'immutable': 'Immutable'
  },

  devtool: "eval",

  devServer: {
    contentBase: "./mochawesome-reports/",
    inline: true,
    stats: {
      colors: true
    },
    filename: "mochawesome.html"
  }
};