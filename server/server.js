const express = require('express');
const next = require('next');
const { parse } = require('url');
const http = require('http');

const DEV = process.env.ENVIRONMENT !== 'production';
const PORT = process.env.PORT || 4000;

const app = next({dir: './', dev: DEV});
const handle = app.getRequestHandler();
// const getRoutes = require('../src/routes/routes');
// const routes = getRoutes();

app.prepare().then(() => {

    const exserver = express();
    exserver.use('/static', express.static('./static'));
    // exserver.use(handle);

    exserver.get('/', (req, res) => {
        return app.render(req, res, '/index');
    })
    exserver.get('/index', (req, res) => {
        return app.render(req, res, '/index');
    })
    exserver.get('/bets', (req, res) => {
        return app.render(req, res, '/bets');
    })
    exserver.get('/validation', (req, res) => {
        return app.render(req, res, '/validation');
    })
    exserver.get('/finish', (req, res) => {
        return app.render(req, res, '/finish');
    })
    exserver.get('*', (req, res) => {
        return handle(req, res)
    })

    const server = http.createServer(exserver);
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready for liftoff: http://localhost:${PORT}`);
    });

});
