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

  let message = '';

  if(req.body.message.text === '/hell') {
    message = 'Well... Hello there. It\'s not hell BTW';
  } else {
    message = "Don't know what you are talking about... May be later... Yeah. Comee back later";
  }

  const url = `https://api.telegram.org/bot${botId}/sendMessage?chat_id=${req.body.message.from.id}&text=${message}`
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
