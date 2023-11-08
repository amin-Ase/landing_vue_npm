// webpack.mix.js
let mix = require('laravel-mix');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

mix.setPublicPath('dist');
//  dist js
mix.js('src/luxury.js', 'js')
    .vue()
    .webpackConfig({
        plugins: [
            new VueLoaderPlugin()
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js'
                // '@': path.resolve(__dirname, 'src'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        }
    })
    // dist css
    .sass('src/luxury.sass', 'css');

// JS copy -- copy libraries from node-module to "dist/lib/js"
mix.copy([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/blazy/blazy.min.js',
], 'dist/lib/js');

// CSS copy -- copy installed libraries from node-module to "dist/lib/css"
mix.copy([
    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
    'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
], 'dist/lib/css');

mix.copy([
    'src/js/global.js'
], 'dist/js');

// mix.browserSync('http://localhost/landing_vue_npm/luxury/');
