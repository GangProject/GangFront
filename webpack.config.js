module.exports = {

    entry: './src/index.js',
    // 파일을 합치고 ./public/bundle.js 에 저장한다.
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/',
        historyApiFallback: true //새로고침했을때 Cannot GET /home 이런식의 오류 해결하기위해
    },

    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }, {
                test: /\.jpg$/,
                loader: 'url-loader?limit=20000'
            }, {
                test: /\.png$/,
                loader: 'url-loader?limit=20000'
            }
        ]
    }
};
