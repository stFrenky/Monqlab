const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
}

module.exports = {
	mode: mode,
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: '[name].js',
		assetModuleFilename: "assets/[name][ext][query]",
		clean: true,
	},
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	module: {
		rules: [{
			test: /\.html$/i,
			loader: "html-loader",
		},
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
				(mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
				"css-loader",
				{
					loader: "postcss-loader",
					options: {
						postcssOptions: {
							plugins: [
								[
									"postcss-preset-env",
									{
										// Options
									},
								],
							],
						},
					},
				},
				"sass-loader",
			],
		},
		{
			test: /.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},
		{
			test: /.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
		},
		{
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		]
	},
}
