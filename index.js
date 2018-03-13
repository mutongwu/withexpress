const path = require('path');
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const webpackHotMiddleware = require('webpack-hot-middleware');
// const Server = require('./server.js')
const port = (process.env.PORT || 8080)
// const app = Server.app()



const app = express();
// const indexPath = path.join(__dirname, 'index.html');
// const publicPath = express.static(path.join(__dirname, './dist'));

// app.use('/', publicPath);
// app.get('/', function (_, res) { res.sendFile(indexPath) });
app.get('/hello', (req, res) => res.send(JSON.stringify({name:'hello world'})))

const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler, {
}))

app.listen(port)
console.log(`Listening at http://localhost:${port}`)