var path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js",
        publicPath: "/frontend/static/public/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
            // {
            //     loader: 'css-loader',
            //     options: {
            //         url: false
            //     }
            // }
        ]
    }
};