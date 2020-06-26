const path = require('path');

module.exports = {
    entry: './src/assets/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'main.js'
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