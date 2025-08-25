const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const { el } = require('@faker-js/faker');

const app = express();
app.use(express.json());

const whiteList = ['http://localhost:3002', 'http://localhost:5001'];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('prohibido'))
    }
  }
}
app.use(cors(options));

const port = 3002;

app.get('/', (req, res) => {
  res.send('Hola, mi server en express')
})


routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('localhost:'+ port)
})
