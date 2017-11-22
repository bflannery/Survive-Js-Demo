const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const merge = require('webpack-merge');
const glob = require('glob');
const parts = require('./webpack.parts');

//
// BUNDLE PATHS
//
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
};

//
// COMMON CONFIGS
//
const commonConfig = merge([
  {
	entry: {
		app: PATHS.app,
	},
  target: 'web',
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack demo',
		}),
		new DashboardPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.HashedModuleIdsPlugin(),
	],
},
  // parts.lintJavaScript({ include: PATHS.app }),
  // parts.lintCSS({ include: PATHS.app }),
  parts.loadFonts({
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }),
  parts.loadJavaScript({ include: PATHS.app }),
]);

//
// PRODUCTION CONFIGS
//
const productionConfig = merge([
  {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000, // in bytes
    },
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js'
    },
    // plugins: [new webpack.NamedModulesPlugin()],
    recordsPath: path.join(__dirname, 'records.json'),
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
        safe: true,
      },
    },
  }),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
      minChunks: Infinity
    },
  ]),
  parts.attachRevision(),
  parts.generateSourceMaps({
    type: 'source-map'
  }),
  parts.extractCSS({
    // use: 'css-loader',
    use: ['css-loader', parts.autoprefix()],
  }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  }),
  parts.loadImages({
    options: {
      limit: 25000,
      name: '[name].[hash:8].[ext]',
    },
  }),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  )
]);

//
// DEV CONFIGS
//
const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.devServer({
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
		}),
  parts.loadCSS(),
  parts.loadImages(),
  ]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
    }
  return merge(commonConfig, developmentConfig);
};

