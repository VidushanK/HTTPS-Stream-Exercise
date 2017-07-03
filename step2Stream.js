// use buffering to output chunks in a variable
https = require('https');
function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
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

getAndPrintHTMLChunks();