var concat = require('../');
var test = require('tape');
var md5 = require('md5');

test('concat README', function (t) {
  t.plan(2);
  const requested = 'd11ddcecf3d5cbc627439260bdbfda72';
  concat('hash://md5/' + requested, function(data) {
    t.equal(data.substring(0,26), 'Global Biotic Interactions');
    t.equal(md5(data), requested);
  });
});
