const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
app.use(express.json());

const whiteList = ['http://127.0.0.1:5500/','http://localhost:3002', 'http://localhost:5001', 'http://localhost:5500'];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin ) {
      callback(null, true)
    } else {
      callback(new Error('prohibido'))
    }
  }
}
app.use(cors());

const port = process.env.PORT || 3002;

app.get('/', checkApiKey,  (req, res) => {
  res.send('Hola, mi server en express')
})


routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('localhost:'+ port)
})
