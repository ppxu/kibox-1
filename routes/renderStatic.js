var fs = require('fs'),
	path = require('path'),
	mime = require('./mime');

exports.render = function(urlPath, res) {
	fs.readFile(urlPath, 'binary', function(err, data) {
		if (err) {
			res.render('error', {
				title: '500',
				err: '500 ERROR',
				word: 'file read error: ' + urlPath,
				pretty: true
			});
		} else {
			var ext = path.extname(urlPath);
			ext = ext ? ext.slice(1) : 'unknown';
			var contentType = mime.types[ext] || 'text/plain';
			res.writeHead(200, {
				'Content-Type': contentType
			});
			res.write(data, 'binary');
			res.end();
		}
	});
};