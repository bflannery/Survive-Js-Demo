
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
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack demo',
		}),
		new DashboardPlugin()
	],
},
  parts.lintJavaScript({ include: PATHS.app }),
  parts.lintCSS({ include: PATHS.app }),
  parts.loadFonts({
    options: {
      name: '[name].[ext]',
    },
  }),
  parts.loadJavascript({ include: PATHS.app }),
]);

//
// PRODUCTION CONFIGS
//
const productionConfig = merge([
  parts.cleanBuildDirectory(PATHS.build),
  parts.generateSourceMaps({
    type: 'source-map'
  }),
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()],
  }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  }),
  parts.loadImages({
    options: {
      limit: 25000,
      name: '[name].[ext]',
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
  ]),
  parts.attachRevision(),
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
    // overlay: true is equivalent
    // overlay: {
    // 	errors: true,
    // 	warnings: true,
    // }
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
