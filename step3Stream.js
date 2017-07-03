https = require('https');
function getAndPrintHTML (options) {

    https.get(options, function (response) {
    var bufferingChunks;

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferingChunks += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(bufferingChunks);
    });
  })
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);