const path = require('path')
const resolve = (dir) => path.join(__dirname, './', dir)

const option = {
    baseUrl: './',
    lintOnSave: false,
    outputDir: resolve('page'),
    devServer: {
        port: '8888',
    },
    pages: {
        demo: {
            // page 的入口
            entry: 'demo/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'demo.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'plain-ui demo',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'demo']
        },
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'src': resolve('src'),
                'demo': resolve('demo'),
            }
        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "src/styles/global.scss"; @import "demo/global.scss";`
            }
        }
    },
}

module.exports = option