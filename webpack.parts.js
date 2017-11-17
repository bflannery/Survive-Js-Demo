const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');


exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, //Defaults to `localhost`
    port, //Defaults to 8080
    overlay: {
      errors: false,
      warnings: false,
    },
  },
});

exports.lintJavaScript = ({ include, exclude, options}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: 'pre',
        
        loader: 'eslint-loader',
        options,
      },
    ],
  },
});

exports.loadCSS = ({ include, exclude} = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
});

exports.extractCSS = ({ include, exclude, use }) => {
// Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    // allChunks: true,
    filename: '[name].css',
  });
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          
          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ]
    },
    plugins: [plugin],
  };
};

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()],
  },
});


exports.purifyCSS = ({ paths }) => ({
  plugins: [
    new PurifyCSSPlugin({ paths }),
  ]
});

exports.lintCSS = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        enforce: 'pre',
        
        loader: 'postcss-loader',
        options: {
          plugins: () => ([
            require('stylelint')(),
          ])
        },
      },
    ],
  },
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        include,
        exclude,
    
        use: {
          loader: 'url-loader',
          options,
        },
      },
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 50000,
          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension mimetype: 'application/font-woff',
          // Output below fonts directory
          name: './fonts/[name].[ext]',
        },
      },
    ],
  },
});

exports.loadFonts = ({ include, exclude, options} = {}) => ({
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include,
        exclude,
        use: {
          loader: 'file-loader',
          options,
        },
      },
    ],
  },
});

exports.loadJavascript = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        
        loader: 'babel-loader',
        options: {
          // Enable caching for improved performance during
          // development.
          // It uses default OS directory by default. If you need // something more custom, pass a path to it.
          // I.e., { cacheDirectory: '<path>' }
          cacheDirectory: true,
        },
      },
    ],
  },
});


exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.extractBundles = (bundles) => ({
  plugins: bundles.map((bundle) => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  )),
});


exports.clean = (path) => ({
  plugins: [
    new CleanWebpackPlugin([path]),
  ],
});

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
});

exports.minifyJavaScript = () => ({
  plugins: [
    new UglifyWebpackPlugin(),
  ]
});

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
});


