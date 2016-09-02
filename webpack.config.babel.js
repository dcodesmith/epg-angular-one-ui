import path from 'path';
import precss from 'precss';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let plugins =
  new webpack.DefinePlugin({
    ON_TEST: process.env.NODE_ENV === 'test',
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  });

let config = {
  context: __dirname + '/app',
  entry: {
    app:'./index.js',
    vendor: ['angular', 'angular-resource', 'lodash', 'moment']
  },
  output: {
    path: __dirname + '/app',
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
      { test: /\.(html|json)$/, exclude: /node_modules/, loader: 'raw'},
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader', 'css!postcss-loader!less') },
      { test: /\.svg$/, exclude: /node_modules/, loader: 'file?name=[path][name].[ext]' }
    ]
  },

  postcss: function() {
    return [ autoprefixer, precss ];
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json', '.html', '.less']
  },

  plugins: [ plugins, new ExtractTextPlugin('[name].css') ],
  devServer: {
    stats: {
      hash: false,
      version: false,
      timings: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  // config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  // config.devtool = 'source-maps';
}

module.exports = config;
