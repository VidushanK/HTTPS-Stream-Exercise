
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
    switch (html) {
    case 'a':
      html += '4';
      break;
    case 'e':
      html += '3';
      break;
    case 'o':
      html += '0';
      break;
    case 'l':
      html += '1';
      break;
    case 'o':
      html += '4';
      break;
    case 's':
      html += '5';
      break;
    case 't':
      html += '7';
      break;
    case 'ck':
      html += "x";
      break;
    case 'er':
      html += "0r";
      break;
    case 'you':
      html += "j00";
      break;
    default:
      html
    }
      console.log(html);
  }


getHTML(requestOptions, print1337);
