var fs = require('fs'),
	marked = require('marked');

marked.setOptions({
	highlight: function(code) {
		return require('highlight.js').highlightAuto(code).value;
	}
});

exports.render = function(path, title, res) {
	fs.readFile(path, 'utf8', function(err, data) {
		if (err) {
			res.render('error', {
				title: '500',
				err: '500 ERROR',
				word: 'markdown file read error: ' + path,
				pretty: true
			});
		} else {
			var tokens = marked.lexer(data);
			var content = marked.parser(tokens);
			res.render('page', {
				title: title,
				pageContent: content,
				pretty: true
			});
		}
	});
};