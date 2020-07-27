const path = require("path");

module.exports = {
    title: "Sophon Components Library",
    components: 'src/components/**/*.{js,jsx,ts,tsx}',
    styleguideDir: "dist-docs",
    moduleAliases: {
        "sophon-components-library": path.resolve(__dirname, "src")
    },

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
                    use: [
                        'style-loader',
                        { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
                        'postcss-loader'
                    ]
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
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        externals: {
            react: "react",
            "react-dom": "react-dom"
        }
    },

}