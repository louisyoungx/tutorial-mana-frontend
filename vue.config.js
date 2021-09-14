const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                /* [file]被替换为原始资产文件名。
                   [path]替换为原始资产的路径。
                   [dir]替换为原始资产的目录。
                   [name]被替换为原始资产的文件名。
                   [ext]替换为原始资产的扩展名。
                   [query]被查询替换。*/
                filename: '[path].gz[query]',
                //压缩算法
                algorithm: 'gzip',
                //匹配文件
                test: /\.js$|\.css$|\.html$/,
                //压缩超过此大小的文件,以字节为单位
                threshold: 10240,
                minRatio: 0.8,
                //删除原始文件只保留压缩后的文件
                deleteOriginalAssets: false
            })
        ]
    },
    devServer: {
        proxy: {
            '/api': {     //这里最好有一个 /
                //target: 'http://louisyoung.work:8083',
                target: 'http://127.0.0.1:8000/', // 后台接口域名
                ws: false,        //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
