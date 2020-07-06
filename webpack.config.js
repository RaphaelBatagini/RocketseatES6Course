const path = require('path');

module.exports = {
    entry: {
        main: [
            '@babel/polyfill',
            './src/assets/scripts/main.js',
        ],
        app: [
            '@babel/polyfill',
            './src/assets/scripts/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
}