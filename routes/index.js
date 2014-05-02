/*!
* router.js
* This file contains the code for backend routing.
*
* @project   Interview Probe Form
* @date      13-April-2014
* @author    Ravi Sha, SapientNitro <rsha@sapient.com>
* @licensor  Internal
* @site      Localhost
*
*/

/**
 * 
 * [index router for index/login page]
 * @param  {[object]} req [server request data]
 * @param  {[object]} res [server response data]
 * 
 */

exports.index = function (req, res) {
	res.sendfile('./app/index.html');
};

/**
 * 
 * [register post user registration data]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * 
 */
exports.register = function (req, res) {
	// database helper function.
	var dbHelper = require('../modules/db-helper');
};

/**
 * 
 * [registeradmin registration for admin]
 * @param  {[object]} req [user request data]
 * @param  {[object]} res [server response data]
 * 
 */
exports.registeradmin = function (req, res) {
	// database helper function.
	var dbHelper = require('../modules/db-helper');
	// function requires tablename, and the data to be inserted into it.
	dbHelper.table('admins').insert(req.body).all().where('id = 22').find();
};