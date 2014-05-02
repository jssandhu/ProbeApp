/*!
* db-config.js
* This file contains database configuration settings.
*
* @project   Interview Probe Form
* @date      19-April-2014
* @author    Ravi Sha, SapientNitro <rsha@sapient.com>
* @licensor  Internal
* @site      Localhost
*
*/

/**
 * 
 * [config configuration variable]
 * @type {Object}
 * @property {[string]} [database] [database name]
 * @property {[string]} [host] [host/domain address]
 * @property {[string]} [port] [if using any port address mention it, or use null]
 * 
 */
var IPF = { 
	config: {

		database : 'interviewprobeform',
		host: 'localhost',
		password: 'root',
		user: 'root',
	}
};

/**
 * 
 * [export database configuration setting]
 * @type {[object]}
 * 
 */
module.exports = IPF;
