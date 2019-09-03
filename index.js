'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan')
const app = express();
const port = 3003;


const users = require('./router/users');
const investments = require('./router/investments');
const investors = require('./router/investors');
const projects = require('./router/projects');
const startups = require('./router/startups');


app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/users', users);
app.use('/investments', investments);
app.use('/investors', investors);
app.use('/projects', projects);
app.use('/startups', startups);

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.listen(port, () => {
  console.log('Express listening on port:', port);
});