var express = require('express');
var router  = express.Router();

/* GET home page. */
router.post('/add', function(req, res) {
  // res.send(req);
  var n1  = req.body.n1;
  var n2  = req.body.n2;
  var sum = parseInt(n1) + parseInt(n2);
  res.send("The sum of "+n1+" and "+n2+" is "+ sum);
  // console.log(req.body.n1);
});


module.exports = router;
