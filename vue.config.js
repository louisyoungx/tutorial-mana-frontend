module.exports = {
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
