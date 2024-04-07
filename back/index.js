require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const data = require('./data');

const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: 'GET',
    allowedHeaders: 'Content-Type,Authorization,X-Requested-With,Accept,Content-Length,X-CSRF-Token,X-Socket-ID',
};

app.use(cors(corsOptions));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/train-status', (req, res) => {
  const train = req.query.trainNo;
  
  res.send({
    status: 'success',
    data: data,
    message: 'SUCCESS'
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});
