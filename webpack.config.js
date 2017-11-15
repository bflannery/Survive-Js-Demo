const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const merge = require('webpack-merge');
const glob = require('glob');
const parts = require('./webpack.parts');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
};

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
]);

const productionConfig = merge([
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()],
  }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  })
]);

const developmentConfig = merge([
  parts.devServer({
    // Enable history API fallback so HTML5 History API based
    // routing works. Good for complex setups.
    // historyApiFallback: true,
    
    // Display only errors to reduce the amount of output.
    // stats: 'errors-only',
    
    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || '0.0.0.0';
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    
    // overlay: true is equivalent
    // overlay: {
    // 	errors: true,
    // 	warnings: true,
    // }
		}),
  parts.loadCSS(),
  ]);

module.exports = (env) => {
if (env === 'production') {
  return merge(commonConfig, productionConfig);
}
return merge(commonConfig, developmentConfig);
};
