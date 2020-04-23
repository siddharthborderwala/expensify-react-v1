const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					loader: 'file-loader',
					options: {
						name: './fonts/[name].[ext]',
					},
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
		],
	};
};
