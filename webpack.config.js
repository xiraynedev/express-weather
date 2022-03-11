const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	mode: 'production',
	entry: {
		server: path.resolve(__dirname, 'src', 'server.ts'),
	},
	output: {
		clean: true,
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.ts$/i,
				exclude: /node_modules/i,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: true,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/i,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	externals: [nodeExternals()],
};