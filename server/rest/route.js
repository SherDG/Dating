var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
 var index = fs.readFileSync('./DatingApp/index.html');
//  res.writeHead(200, {
//   'Content-Type': 'text/plain',
//   'Cache-Control': 'no-cache'
// });
 res.end(index);
});

module.exports = router;
