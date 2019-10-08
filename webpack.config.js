/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    return {
        entry: './src/index.tsx',
        devtool: 'cheap-module-source-map',

        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, 'dist'),
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                favicon: './src/favicon.png',
            }),
            new CleanWebpackPlugin(),
        ],

        module: {
            rules: [
                {
                    // Typescript + React
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    include: [path.resolve(__dirname, 'src')],
                    exclude: [/node_modules/],
                },
                {
                    // Files
                    test: /\.(png|jpe?g|pdf)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
                {
                    // Sass files
                    test: /\.s[ac]ss$/i,
                    loader: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.css$/i,
                    loader: ['style-loader', 'css-loader'],
                },
            ],
        },

        devServer: {
            port: '9000',
            open: true,
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
        },
    };
};
