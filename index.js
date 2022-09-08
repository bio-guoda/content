(function(){
  const get = require('simple-get')

  module.exports = function(contentId, cb) {
    const req = 'https://linker.bio/' + contentId;
    get.concat(req, function (err, res, data) {
      if (err) throw err;
      cb(data.toString());
    })
}
})()
