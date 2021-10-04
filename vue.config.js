module.exports = {
    devServer : {
        proxy : {
            '^/api': {
                target: 'http://localhost:'+process.env.PORT,
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
              },
        }
    }
}