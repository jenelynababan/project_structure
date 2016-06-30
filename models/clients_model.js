var express      = require('express');
var db           = require('../config/db');  
var client_model = module.exports = {};
var connection   = db.connection;

// diplay data query
client_model.getClients = function(callback){
	connection.query("SELECT * FROM person", function(err, rows) {
  	   callback(rows);
  	});
};

// insert data query
client_model.insertClients = function(name) {
	var post = { name : name };
	connection.query("INSERT INTO person SET ?", post, function(err){
		console.error(err);
	});

};

// delete data querys
client_model.deleteClient = function(id) {
	connection.query("DELETE FROM person where id = ?", [id]);
};

// update data query
client_model.updateClient = function(client_id, client_name) {
	// console.log(data);
	var columns = {name : client_name}
	connection.query("UPDATE person SET ? where id = ?", [columns, client_id], function(err){
		console.log(err);
	});
};

// get_with_where
client_model.get_with_where = function(client_id) {
	connection.query("SELECT * FROM person where id = ?", [client_id]);

};
