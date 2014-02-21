/*
 * GET home page.
 */

var path = require('path'),
	fs = require('fs'),
	renderMD = require('./renderMD'),
	renderStatic = require('./renderStatic');

exports.bind = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: 'KiBox',
			pretty: true
		});
	});
	app.get(/^([^\.]+)$/, function(req, res) {
		var filePath = req.params[0],
			baseUrl = process.cwd();

		var urlPath = path.resolve(baseUrl, './kibox/' + filePath + '.md'),
			urlPath2 = urlPath.replace('.md', '.markdown'),
			title = filePath.split('/').pop();

		fs.exists(urlPath, function(exists) {
			if (exists) {
				renderMD.render(urlPath, title, res);
			} else {
				fs.exists(urlPath2, function(exists2) {
					if (exists2) {
						renderMD.render(urlPath2, title, res);
					} else {
						res.render('error', {
							title: '404',
							err: '404 ERROR',
							word: 'file not found: ' + urlPath,
							pretty: true
						});
					}
				});
			}
		});
	});
	app.get(/^(.+)$/, function(req, res) {
		var filePath = req.params[0],
			baseUrl = process.cwd();

		var urlPath = path.resolve(baseUrl, './kibox/' + filePath);

		fs.exists(urlPath, function(exts) {
			if (exts) {
				renderStatic.render(urlPath, res);
			} else {
				res.render('error', {
					title: '404',
					err: '404 ERROR',
					word: 'file not found: ' + urlPath,
					pretty: true
				});
			}
		});
	});
};