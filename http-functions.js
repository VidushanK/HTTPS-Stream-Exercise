https = require("https");
module.exports = function getHTML (options, callback) {
      https.get(options, function (response) {
    var bufferingChunks;

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferingChunks += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(bufferingChunks);
    });
  })
}
function printHTML (html) {
  console.log(html);
}