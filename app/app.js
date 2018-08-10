const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');
const request = require('request-promise-native');
const PORT = process.env.PORT || 3001;

const app = express();

const jsonBodyparser = bodyParser.json();

app.use(jsonBodyparser);

const botId = '674676277:AAHepw6YV5F6joA_qB8aogHDLur3l9EYTgI';

app.post('/new-message', (req, res)=>{
  console.log(req.body);

  const url = `https://api.telegram.org/bot${botId}/sendMessage?chat_id=${req.body.message.from.id}&text=I'm still work in progress. don't Come back later`
  request.post(url).then(data =>{
    console.log('message sended');
  }).catch( err => {
    console.log(err.response.body);
  });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;

// curl -F "url=https://sam-test-fac.herokuapp.com/new-message"  https://api.telegram.org/bot674676277:AAHepw6YV5F6joA_qB8aogHDLur3l9EYTgI/setWebhook
