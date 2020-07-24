const express = require('express')
const app = express()
const timeout = require('connect-timeout')
const proxy = require('http-proxy-middleware')
const {HOST='http://localhost:8080',PORT='3000'} = process.dev
app.set('port', PORT);

const TIME_OUT = 30 * 1e3;
app.use(timeout(TIME_OUT))
app.use((req, res, next) =>{
    if(!req.timeout) next()
})

app.use('/', express.static('static'))
app.use(proxy.createProxyMiddleware('/api/test',{
    target:HOST
}))

app.listen(app.get('port'),()=>{
    console.log('server is listening running on 3000. ')
})