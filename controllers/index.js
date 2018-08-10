const hate = require('./hate.js');

function GetBotResponse(text) {
  switch (text) {
    case '/hate':return hate();
    default: return "Don't know what you are talking about... May be later... Yeah. Come back later";
  }
}

module.exports = GetBotResponse;
