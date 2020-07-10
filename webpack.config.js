const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  path.join(__dirname, 'src/main.js'),
    mode: "development",
    devtool: 'inline-source-map',
    context: __dirname,
    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:  /\.vue$/,
                loader: 'vue-loader',

            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: 'img/[name].[hash:8].[ext]',
                    esModule: false
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8089,
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        // open:true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/test/*': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
                secure: false,
                // 替换包含test的接口
                pathRewrite: {
                    '^/test/*': ''
                }
            }
        }
    },
    resolve: {
        extensions: [ '.js', '.vue'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: "Webpack App"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new VueLoaderPlugin()
    ]
};