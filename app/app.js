const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');
const request = require('request-promise-native');
const GetBotResponse = require('../controllers');
const PORT = process.env.PORT || 3001;

const app = express();

const jsonBodyparser = bodyParser.json();

app.use(jsonBodyparser);

const botId = '674676277:AAHepw6YV5F6joA_qB8aogHDLur3l9EYTgI';

app.post('/new-message', (req, res)=>{

  const { message } = req.body;

  const url = `https://api.telegram.org/bot${botId}/sendMessage`;
  request.post(url, {
    chat_id:message.from.id,
    text:GetBotResponse(message.text)
  }).then(data =>{
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
