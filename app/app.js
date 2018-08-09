const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');
const PORT = process.env.PORT || 3001;

const app = express();

const urlencodedBodyparser = bodyParser.urlencoded({ extended: true });

app.use(urlencodedBodyparser);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/new-message', (req, res)=>{
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;
