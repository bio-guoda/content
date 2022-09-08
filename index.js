const get = require('simple-get')

exports.concat = function(contentId, cb) {
  
  const req = 'https://linker.bio/' + contentId;
  console.log(req);
  get.concat(req, function (err, res, data) {
    if (err) throw err;
    console.log(res.statusCode); // 200
    cb(data.toString());
  })

}
