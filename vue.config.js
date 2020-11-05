module.exports = {
    devServer: {
        proxy: {
            '/api': {
                ws: false,
                target: "http://localhost:3000",
                changeOrigin: true,
                widthCredentitals: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}