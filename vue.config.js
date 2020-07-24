const path = require('path')

module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('styles',path.join(__dirname, './src/assets/css/'))
            .set('@',path.join(__dirname, './src/'))
            .set('common', path.join(__dirname, './src/pages/common'))
    },
    devServer:{
        proxy:{
            '/api': {
                target: 'https://123things.github.io/travel/dist',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api':'/mock'
                }
            }
        }
        
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | error
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        // if (debug) { // 开发环境配置
        //     config.devtool = 'cheap-module-eval-source-map'
        // } else { // 生产环境配置
        // }
    },
    pluginOptions: {
        'process.env':{
            NODE_ENV:'"development"'
        }
    }
}