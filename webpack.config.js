const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
    entry: {
        main: './src/index.js',
    },
    mode: 'none' || 'development',
    devtool: argv.mode === 'none' || 'production' ? false : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Babel',
            filename: 'index.html',
            template: './public/index.html',
            inject: false,
            hash: true,
            cache: true,
            meta: [
                {
                    charset: 'utf-8',
                },
                {
                    viewport:
                        'width=device-width, initial-scale=1.0, shrink-to-fit=no',
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'ie=edge',
                },
                {
                    name: 'theme-color',
                    content: '#495121',
                },
                {
                    property: 'og:url',
                    content: 'https://github.com/abisalde',
                },
                {
                    property: 'og:description',
                    content: 'Just a App',
                },
            ],
            scriptLoading: 'defer',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|oft)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 4040,
    },
});
