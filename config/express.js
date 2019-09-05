const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../router');

app.use(bodyParser.json());
app.set('port',80);

Object.keys(routes).forEach(key => app.use(`/api/${key}`, routes[key]));

module.exports = app;