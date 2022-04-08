const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = false;

// console.log( __dirname );

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        watchFiles: [path.join(__dirname, "src/*")],
        compress: true,
        host: '0.0.0.0',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime'
                        ],
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    {
                        loader:"css-loader",
                        options:{
                            url:false
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')}),
    ]
}