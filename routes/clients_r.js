var express      = require('express');
var db           = require('../config/db');  
var client_model = require('../models/clients_model');  
var router       = express.Router();


// router.get('/', function(req, res) {
//   client_model.getClients(function(result){
//   	 res.render('clients_view', {person : result});
//   });
// });

module.exports = router;
