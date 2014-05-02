/*!
* app.js
* Node Configuration File
*
* @project   Interview Probe Form
* @date      10-April-2014
* @author    Ravi Sha, SapientNitro <rsha@sapient.com>
* @licensor  Internal
* @site      Localhost
*
*/


/**
 * Module dependencies.
 *
 * @param express	express.js dependencies
 * @param [http]	default node module for htpp request
 * @param [app]		instance of express module
 *
 */

'use strict';

// Global variables for server 
var express = require('express'),
	http = require('http'),
	path = require('path'),
	CookieParser = require('cookie-parser'),
	session = require('express-session'),
	router = require('./routes'),
	bodyParser = require('body-parser'),
	dbHelper = require('./modules/db-helper'),
	config = require('./config/db-config'),
	app = express();

/**
* @description	Server configurational setting resides here.
* @callback [express.static]	setting the default paths
*/
app.set('views', __dirname + '/app');
app.set('port', process.env.PORT || 3000);
// cookie middleware
app.use(CookieParser());
// server side session middleware
app.use(session({secret: '12sae3$e53#$%^'}));

app.use(express.static(path.join(__dirname + '/app/bower_components')));
app.use(express.static(path.join(__dirname + '/app/scripts')));
app.use(express.static(path.join(__dirname + '/app/styles')));
app.use(express.static(path.join(__dirname + '/app/views')));

// middleware will parse the json post call data.
app.use(bodyParser());


// router setting for index page
app.get('/', router.index);
// router setting for candidate registration page
app.post('/register', router.register);
// router setting for admin registration page
app.post('/registeradmin', router.registeradmin);

/**
 * @description [Function will create a node server with the port address set above]
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});