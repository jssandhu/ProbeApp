/*!
* db-helper.js
* This file contains helper methods for database like, quering, find, collections.
*
* @project   Interview Probe Form
* @date      19-April-2014
* @author    Ravi Sha, SapientNitro <rsha@sapient.com>
* @licensor  Internal
* @site      Localhost
*
*/

/**
 * [DB chaining based database queries]
 * Initialize this plugin and provide the table name you want to work with.
 * This plugin assumes your primary key to be 'id' of the table.
 * use primaryKey property to modify the value.
 *
 * Functions looks anonymous yet they have name assigned to them just to make
 * `arguments.callee.caller.name` works, as anonymous function has no names 
 * and its undefined
 */
function DB () {

	/**
	* [db including mongodb plugin]
	* @type {[object]} 
	 */
	this.mysql = require('mysql'),
	this.config = require('../config/db-config').config;

	// the the value to the primary key of your database.
	this.primaryKey = 'id';

	// holds the query string array
	this.queryStringHolder = [];

	// holds the functions name being called by users,
	this.functionNames = [];

	// temporary property
	this.counter = 0;
}

DB.prototype = {

	/**
	 * [dbconfig method will enable database connection, it requires database configuration, 
	 * config setting is in db-config.js file]
	 * @return {[object]} [mysql database properties]
	 */
	dbconfig: function dbconfig () {
		// setting `this` scope.
		var self = this;

		// configuration for database.
		var connection = self.mysql.createConnection({
			host: self.config.host,
			user: self.config.user,
			password: self.config.password,
			database: self.config.database
		});

		// console.log(self.counter = self.counter + 1);

		connection.on('error', function (err) {
			throw err;
		});

		return connection;
	},

	/**
	 * [disconnect from database]
	 */
	disconnect: function disconnect () {
		this.dbconfig().end();
	},

	/**
	 * 
	 * [table name]
	 * @param  {[string]} name [name of the table]
	 * @return {[string]}      [chainable pattern]
	 * 
	 */
	table: function table (name) {
		// setting the scope
		var self = this;

		if (name.constructor === Array) {
			// used when user is using multiple tables, for joining
		}
		else{
			self.tablename = name;
		}
		return self;
	},

	/**
	 * 
	 * [insertQueryBuilder automate the insert process, for this function your array key
	 * should match the database field name and value should be the value.]
	 * @param  {[string]} table [table name for inserting data]
	 * @param  {[array]} arr [user input data]
	 * 
	 */
	insert: function insert (arr) {
		// setting the scope
		var self = this, keys = '', values = '', key;

		// checks argument datatype
		if(typeof arr === 'object') {
			
			// loop and construct the query
			for(key in arr) {
				keys += "`"+ key +"`"+', ';
				values += "'"+arr[key] +"'"+ ', ';

			}
			// remove the last comma from the appended string.
			keys = keys.slice(0, keys.length - 2);
			values = values.slice(0, values.length - 2);
		}

		// mysql query to insert the data.
		self.stringBuilder('INSERT INTO '+ self.tablename + ' ('+ keys +') VALUES ('+ values +')');

		// returning table name for furthur chaining
		return self;	
	},

	/**
	 * [all select all record in database]
	 * @param  {[array]} res [description]
	 * @return {[type]}     [description]
	 */
	all: function all () {
		// setting the scope
		var self = this;

		self.stringBuilder('SELECT * FROM ' + self.tablename);

		return self;
	},

	/**
	 * [find retrive a record by its primary key]
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	find: function find (id) {
		//setting the scope.
		var self = this;

		// compile the 
		self.stringBuilder('SELECT * FROM '+ self.tablename +' WHERE '+ self.primaryKey +' ='+ id);

		// chaining
		return self;
	},

	/**
	 * [when select query with where clause]
	 * @return {[type]} [description]
	 */
	where: function where (expression) {
		//setting the scope.
		var self = this, len, queryString;

		// this process will display the function name, before where clause.
		len = (self.functionNames.length - 1);

		self.queryStringHolder[len]+' WHERE '+ expression;

		// chaining
		return self;
	},

	// delete a record by an expression.
	delete: function deletes (expression) {
		//setting the scope.
		var self = this;

		self.queries = self.dbconfig().query('DELETE * FROM '+ self.tablename + ' WHERE '+ "'" + expression + "'", function(err, data, fields) {
			if(err) {
				throw err;
			}
			console.log(data);
		});

		// stop the connection
		self.disconnect();

		// chaining
		return self;
	},

	// delete a record using primary key - id.
	deleteid: function deleteid () {},

	/**
	 * [stringBuilder generate string query and maintain record of called functions]
	 * @param  {[string]} queryString [param accepts query string and push it to public property].
	 */
	stringBuilder: function stringBuilder (queryString) {
		//setting the scope.
		var self = this;
		
		// building the query string array.
		self.queryStringHolder.push(queryString);

		// tracking the functions names as called by users.
		self.functionNames.push(arguments.callee.caller.name);
	},


	/**
	 * [execute function generate mysql query]
	 * @return {[object]} [will contain final output of the chained query]
	 */
	execute: function execute () {
		//setting the scope.
		var self = this, i, len;

		// looping through the query string array.
		for (i = 0, len = self.queryStringHolder.length; i < len; i++) {

			self.dbconfig().query(self.queryStringHolder[i], function (err, data) {
				
				if(err) {
					throw err;
				}else{
					// console.log(data);
				}
			});
		}

		// closing the connection
		self.disconnect();
	},

	buildingJson: function buildingJson () {

	},

};

/**
 * [export database helper methods]
 * @type {[class]}
 */
module.exports = new DB();






