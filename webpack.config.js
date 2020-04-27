const path = require('path');
const DotEnv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
	DotEnv.config({ path: '.env.development' });
} else {
	DotEnv.config({ path: '.env.test' });
}

module.exports = (env) => {
	const isProductionMode = env === 'production';
	return {
		entry: './src/js/app.js',
		devtool: isProductionMode ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			publicPath: '/dist/',
			port: 4000,
			historyApiFallback: true,
		},
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								config: {
									path: 'postcss.config.js',
								},
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
				{
					test: /\.(ico)$/,
					loader: 'file-loader',
					options: {
						name: './../[name].[ext]',
					},
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: '../index.html',
				template: './src/index.html',
			}),
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
			new webpack.DefinePlugin({
				'process.env.FIREBASE_API_KEY': JSON.stringify(
					process.env.FIREBASE_API_KEY
				),
				'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
					process.env.FIREBASE_AUTH_DOMAIN
				),
				'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
					process.env.FIREBASE_DATABASE_URL
				),
				'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
					process.env.FIREBASE_PROJECT_ID
				),
				'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
					process.env.FIREBASE_STORAGE_BUCKET
				),
				'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
					process.env.FIREBASE_MESSAGING_SENDER_ID
				),
				'process.env.FIREBASE_APP_ID': JSON.stringify(
					process.env.FIREBASE_APP_ID
				),
				'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(
					process.env.FIREBASE_MEASUREMENT_ID
				)
			}),
		],
	};
};
