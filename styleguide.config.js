const path = require("path");

module.exports = {
    title: "Sophon Components Library",
    components: 'src/components/**/*.{js,jsx,ts,tsx}',
    styleguideDir: "dist-docs",
    moduleAliases: {
        "sophon-components-library": path.resolve(__dirname, "src")
    },
    propsParser: require("react-docgen-typescript").withCustomConfig(
        "./tsconfig.json",
    ).parse,

    webpackConfig: {
        module: {
            rules: [
                // Babel loader will use your project’s babel.config.js
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                    ]
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader','css-loader'],
                    // use: ['style-loader',
                    //     { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
                    //     'postcss-loader'
                    // ]
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" , options: { importLoaders: 1, modules: {localIdentName: '[name]_[local]_[hash:base64:5]'} } // translates CSS into CommonJS
                    }, {
                        loader: "postcss-loader", // compiles Less to CSS
                    },
                    {
                        loader: "less-loader",
                    }]
                },
                {test: /\.eot$/, use: ['file-loader']},
                {test: /\.(woff|woff2)$/, use: ['url-loader']},
                {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
                {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
                {
                    test: /\.(png|jpg|gif)$/,
                    use: ['url-loader'],
                },
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        externals: {
            "react": "react",
            "react-dom": "react-dom"
        }
    },

}