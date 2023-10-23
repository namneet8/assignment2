let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  message = {"message" : "Welcome to DressStore Application"}
  res.send(message);
  
});


module.exports = router;