var express      = require('express');
var client_model = require('../models/clients_model');  
var router       = express.Router();

// pass data to view
router.get('/', function(req, res) {
  client_model.getClients(function(result){
  	 res.render('clients_view', {person : result, title : "Clients"});
  });
});

// insert data
router.post('/insert', function(req, res) {
  var client_name = req.body.client_name;
  client_model.insertClients(client_name);
  res.redirect('/clients');
});

// delete data
router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  client_model.deleteClient(id);
  res.redirect('/clients');
  // console.log(id);
});

// update data
router.post('/edit', function(req, res) {
  var client_id   = req.body.client_id;
  var client_name = req.body.client_name;
  client_model.updateClient(client_id, client_name);
  res.redirect('/clients');
  // console.log(id);
});




module.exports = router;
