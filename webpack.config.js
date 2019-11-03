/**
 * Webpack 4 is meant to be zero config which is fine for a vanilla JS project but since we're dealing with React and dealing with multiple loaders, we still need a config as per Webpack 4 docs.
 * We could pass flags e.g --module-bind js=babel-loader to prevent having a config file but I'm not a fan of this method as it makes NPM scripts very long!
 */

const path = require('path');
const precss = require('precss');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
/* eslint-disable prefer-destructuring */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
/* eslint-enable prefer-destructuring */

const filenames = {
	css: '[name].bundle.css',
	js: '[name].bundle.js',
};

console.log('#############################################');
console.log('');

module.exports = (env, options) => ({
	entry: './src/main/index.js',
	output: {
		publicPath: '/',
		filename: `assets/js/${filenames.js}`,
		chunkFilename: `assets/js/${filenames.js}`,
		path: path.resolve(__dirname, 'public'),
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	node: {
		fs: 'empty',
	},
	devtool:
    options.mode === 'production' ? 'source-map' : 'cheap-module-source-map',
	devServer: {
		hot: true,
		compress: true,
		watchContentBase: true,
		disableHostCheck: true,
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'src'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules|bower_components/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.(css)$/,
				exclude: /node_modules|bower_components/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						/* Interprets `@import` and `url()` like `import/require()` and will resolve them */
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(scss)$/,
				exclude: /node_modules|bower_components/,
				use: [
					{
						/* Basically does what it says on the tin - watches for style changes! */
						loader: 'css-hot-loader',
						options: {
							sourceMap: true,
						},
					},
					/**
           * Commented out as we want to extract the styles into a seperate file which the mini CSS extract plugin will do.
           * If you want to keep the styles within the scripts, comment this back in and comment out mini CSS extract plugin line below.
           */
					/*
				{
					loader: 'style-loader',
					options: {
						sourceMap: true,
					},
				},
				*/
					MiniCssExtractPlugin.loader,
					{
						/* Interprets `@import` and `url()` like `import/require()` and will resolve them */
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						/* Loader for webpack to process CSS with PostCSS */
						loader: 'postcss-loader',
						options: {
							autoprefixer: {
								browsers: ['last 3 versions'],
							},
							plugins: () => [precss(), autoprefixer()],
							sourceMap: true,
						},
					},
					{
						/* Loads a SASS/SCSS file and compiles it to CSS */
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				exclude: /node_modules|bower_components/,
				use: 'url-loader?limit=10000',
			},
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				exclude: /node_modules|bower_components/,
				use: 'file-loader',
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				exclude: /node_modules|bower_components/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000 /* Convert images < 8kb to base64 strings */,
							name: 'assets/img/[name]-[hash].[ext]',
						},
					},
				],
			},
			{
				test: /\.html$/,
				exclude: /node_modules|bower_components/,
				use: {
					loader: 'html-loader',
					options: {
						minimize: true,
					},
				},
			},
			{
				test: /bootstrap\/dist\/js\/umd\//,
				use: 'imports-loader?jQuery=jquery',
			},
		],
	},
	resolve: {
		extensions: ['*', '.jsx', '.js', '.scss', '.css', '.html'],
		alias: {
			'~root': path.resolve(__dirname, '.'),
			'~components': path.resolve(__dirname, 'src/main/lib/components'),
			'~config': path.resolve(__dirname, 'src/main/config'),
			'~store': path.resolve(__dirname, 'src/main/redux/store'),
			'~helpers': path.resolve(__dirname, 'src/main/lib/helpers'),
			'~api': path.resolve(__dirname, 'src/main/lib/api'),
			'~redux': path.resolve(__dirname, 'src/main/redux'),
			'~hooks': path.resolve(__dirname, 'src/main/lib/hooks'),
		},
	},
	performance: {
		hints: false,
	},
	stats: {
		colors: false,
		hash: true,
		timings: true,
		assets: true,
		chunks: true,
		chunkModules: true,
		modules: true,
		children: true,
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					name: 'vendors',
					chunks: 'all',
					/* minChunks: 2, */
					test: /node_modules/,
				},
			},
		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false,
				uglifyOptions: {
					compress: {
						inline: false,
					},
				},
			}),
			new OptimizeCSSAssetsPlugin(),
			new MinifyPlugin(),
		],
	},
	plugins: [
		new webpack.NormalModuleReplacementPlugin(/\^src\/main\/(?!(?:.*\/)?config\/*$).*.js/, ((resource) => {
			if (env === 'production') {
				try {
					const prodRes = resource.request.replace('.js', `.${env}.js`);
					// eslint-disable-next-line
					require(prodRes);
					resource.request = prodRes;
				} catch (e) {
					// DO NOTHING
				}
			}
		})),
		new MiniCssExtractPlugin({
			filename: `assets/css/${filenames.css}`,
		}),
		new HtmlWebPackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			hash: options.mode === 'production',
		}),
		new HtmlWebPackPlugin({
			template: 'src/404.html',
			filename: '404.html',
			hash: options.mode === 'production',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new webpack.HashedModuleIdsPlugin(),
		new CopyWebpackPlugin([
			{
				force: true,
				cache: true,
				to: 'assets/icons',
				from: 'src/assets/icons',
			},
			{
				force: true,
				cache: true,
				to: 'assets/img',
				from: 'src/assets/img',
			},
			{
				force: true,
				cache: true,
				to: 'assets/fonts',
				from: 'src/assets/fonts',
			},
			{
				force: true,
				cache: true,
				to: 'assets/fonts',
				from: 'node_modules/font-awesome/fonts',
			},
			{
				force: true,
				cache: true,
				to: 'manifest.json',
				from: 'manifest.json',
			},
		]),
		new BundleAnalyzerPlugin(),
	],
});
