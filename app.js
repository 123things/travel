const express = require('express')
const path = require('path')
const config = require('./vue.config')
const app = express()
const proxy = require('http-proxy-middleware');
const proxyTable = config.devServer.proxy

//设置允许跨域访问该服务.
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });


// 反向代理
Object.keys(proxyTable).forEach((context)=>{
    let options = proxyTable[context]
    if(options === 'string' ){
        options = { target : options}
    }
    app.use(proxy.createProxyMiddleware(options.filter || context, options))
});


app.use(express.static(path.join(__dirname,'dist')))
app.listen(3000, ()=>{
    console.info('app listening on port 3000.')
})


