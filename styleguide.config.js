const path = require("path");

module.exports = {
    title: "Sophon Sample Components Library",
    components: 'src/components/**/*.tsx',
    styleguideDir: "dist-docs",
    moduleAliases: {
        "sophon-sample-components-library": path.resolve(__dirname, "src")
    },

    webpackConfig: {
        module: {
            rules: [
                // Babel loader will use your project’s babel.config.js
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        { loader: 'css-loader'},
                        { loader: 'postcss-loader', options: { extract: false, modules: true, importLoaders: 1 } }
                    ]
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