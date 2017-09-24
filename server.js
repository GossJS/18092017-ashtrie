let express = require('express');
let app = express();
const PORT = 8000;
let counter = 0;

app
.use((req, res, next) => {
    ++counter;
    console.log(`counter ${counter}`);
    next();
})
.get('/add/:x/:y', req => req.res.end(`${Number(req.params.x) + Number(req.params.y)}`))
.get('/subtract/:x/:y', req => req.res.end(`${Number(req.params.x) - Number(req.params.y)}`))
.get('/multiply/:x/:y', req => req.res.end(`${Number(req.params.x) * Number(req.params.y)}`))
.get('/divide/:x/:y', req => req.res.end(`${Number(req.params.x) / Number(req.params.y)}`))
.get('/pow/:x/:y', req => req.res.end(`${Number(req.params.x) ** Number(req.params.y)}`))
.get('/kramer/:a1/:b1/:c1/:a2/:b2/:c2', req => {
    let delta = Number(req.params.a1) * Number(req.params.b2) - Number(req.params.b1) * Number(req.params.a2);
    let delta1 = Number(req.params.c1) * Number(req.params.b2) - Number(req.params.b1) * Number(req.params.c2);
    let delta2 = Number(req.params.c1) * Number(req.params.a2) - Number(req.params.a1) * Number(req.params.c2);
    req.res.end(`x = ${delta1 / delta}, y = ${delta2 / delta}`);
})
.get('/*', req => req.res.end('hello from express calc!'))
.listen(PORT || process.env.port);

module.exports = app;
