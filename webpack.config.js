const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const DotEnv = require('dotenv-webpack')

module.exports = {
    entry: './index.js',
    mode: 'development',
    //mode: 'production',
    devtool : 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    devServer: {
        port: 8000,
        historyApiFallback: true,
        compress : false,
        static :{
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              }
        ],
    },
    performance : {
        hints : false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new DotEnv()
    ]
};
