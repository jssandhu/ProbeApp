exports.connection = function () {
	var DB = require('sequelize'),
		config = require('../config/db-config').config;
		


	db = new DB(config.database, config.username, config.password, {
		dialect: 'mysql',
		port: 3306
	});

	db.authenticate().complete(function (err) {
		if(!! err) {
			console.log('Unable to connect to the database: ',err);
		}else {
			console.log('Connection has been established successfully.');
		}
	});

	return db;
};