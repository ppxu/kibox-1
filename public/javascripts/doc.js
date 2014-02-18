var $ = KISSY.all;

$('table').addClass('table table-bordered table-hover');

var dir = location.pathname;
var nav = $('.nav');
nav.all('li').removeClass('active');

if (dir === '/') {
	nav.one('.home').addClass('active');
} else if (dir.indexOf('docs/quickstart') !== -1) {
	nav.one('.quickstart').addClass('active');
} else if (dir.indexOf('docs/api') !== -1) {
	nav.one('.api').addClass('active');
}

$('.dropdown').on('mouseenter', function(e) {
	this.st && window.clearTimeout(this.st)
	$(e.target).addClass('open');
}).on('mouseleave', function(e) {
	this.st = window.setTimeout(function() {
		$(e.target).removeClass('open');
	}, 100);
});
