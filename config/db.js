var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'expressDB'
});

connection.connect(function(err) {
    if (err) {
    console.error('error connecting: ' + err.stack);

    return;
	}
	else {
    	console.log("connected kas brad!");
    }
});

module.exports.connection = connection;