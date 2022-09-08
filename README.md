# content
javascript library to retrieve content by their content hash

# example


```javascript
var concat = require('content-concat');
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
```

# also see

https://github.com/bio-guoda/preston

MJ Elliott, JH Poelen, JAB Fortes (2020). Toward Reliable Biodiversity Dataset References. Ecological Informatics. https://doi.org/10.1016/j.ecoinf.2020.101132

(preprint) Elliott, M. J., Poelen, J. H., & Fortes, J. (2022, August 29). Signed Citations: Making Persistent and Verifiable Citations of Digital Scientific Content. https://doi.org/10.31222/osf.io/wycjn
