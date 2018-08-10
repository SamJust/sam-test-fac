const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');
const PORT = process.env.PORT || 3001;

const app = express();

const urlencodedBodyparser = bodyParser.urlencoded({ extended: true });
const jsonBodyparser = bodyParser.json();

app.use(jsonBodyparser);
app.use(urlencodedBodyparser);

app.post('/new-message', (req, res)=>{
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;

// curl -F "url=https://sam-test-fac.herokuapp.com/new-message"  https://api.telegram.org/bot674676277:AAHepw6YV5F6joA_qB8aogHDLur3l9EYTgI/setWebhook
