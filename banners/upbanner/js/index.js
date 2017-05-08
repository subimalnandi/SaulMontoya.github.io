var arr = 
[
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-python-en-hidrologia", "title": "Curso presencial y online de Python en Hidrolog\u00eda, 09, 11, 13, 16, 18 y 20 May 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-qgis-basico", "title": "Curso presencial y online de QGIS b\u00e1sico.  22, 24, 25, 27, 29 y 31 May 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-presencial-y-online-de-reglamentacin-de-derechos-de-uso-y-permisos-del-agua-y-planes-integrales-de-adaptacin-a-los-ecas-y-lmps-12-14-16-19-21-y-23-jun-2017", "title": "Curso presencial y online de Reglamentaci\u00f3n de Permisos del Agua y Planes Integrales de Adaptaci\u00f3n a los ECAs y LMPs, 12 al 23 Jun 2017"},
{"link": "http://www.gidahatari.com/cu-dt/curso-de-implementacion-de-sensores-ambientales-continuos-con-raspberry-pi-3-y-arduino", "title": "Curso presencial y online de Implementaci\u00f3n de Sensores Ambientales Cont\u00ednuos con Raspberry Pi 3 y Arduino, 09 - 14 Oct 2017"}
]

var i = Math.floor((Math.random() * arr.length));

//console.log(i);

document.body.innerHTML = document.body.innerHTML.replace('%%Linea1%%', arr[i]['title']);

var moduleName = 'js-intro',

	selector = '.' + moduleName,

	artBoardSelector = selector + '-art-board',

	titleSelector = selector + '-title',

	captionSelector = selector + '-caption',

	itemClassName = moduleName + '-art-board-item',

	itemSelector = '.' + itemClassName,

	$els = $(selector),

	imageSize = [50, 50], // width, height

	images = [
		'img/HB1.png',
		'img/HB2.png',
		'img/HB3.png',
		'img/HB4.png',
		'img/HB5.png',
		'img/HB6.png',
		'img/HB7.png',
		'img/HB8.png',
		'img/HB9.png',
	],

	coords = [
		'n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'
	],

	positions = {},

	startScale = 5,

	gridFragment = '',

	latest = 0,

	startTimeout,

	endTimeout,

	bezier = 'cubic-bezier(.17,.5,.83,.5)';

function setStyling() {
	var $el = $(this),
		index = _.random(images.length - 1),
		imageUrl = images[index];

	var coord = coords[_.random(coords.length - 1)],
		position = positions[coord],
		delay = _.random(0, 8) / 10,
		speed = _.random(12, 20) / 10,
		rotate = _.random(-30, 30);

	$el.css({
		transform: 'translate(' + position[0] + 'px, ' + position[1] + 'px) scale(' + startScale + ') rotate(' + rotate + 'deg)',
		opacity: 0,
		transition: 'all ' + speed + 's ' + delay + 's ' + bezier,
		backgroundImage: 'url(' + imageUrl + ')',
		zIndex: delay + (speed * 10)
	});

	if ((delay + speed) > latest) {
		latest = (delay + speed);
	}
}

function fillArtBoard($el) {
	var width = $el.width(),
		height = $el.height(),
		itemsAxis = {
			x: Math.ceil(width / imageSize[0]),
			y: Math.ceil(height / imageSize[1])
		},
		itemsAmount = itemsAxis.x * itemsAxis.y;

	function createFragment(i) {
		gridFragment += '<div class="art-board__item ' + itemClassName + '"></div>';
	}

	_.times(itemsAmount, createFragment);
	$el.html(gridFragment);
	$(itemSelector).css({
		width: imageSize[0],
		height: imageSize[1]
	});

	$(itemSelector).each(setStyling);

	// reset width art board
	$el.css({
		width: itemsAxis.x * imageSize[0],
		height: itemsAxis.y * imageSize[1]
	});

	startTimeout = setTimeout(function() {
		$(itemSelector).addClass('animate');
	}, 300)

	endTimeout = setTimeout(function() {
		$(captionSelector).addClass('animate');
	}, (latest * 1000) - 50);
}

function sizeArtBoard($el, $helper) {
	var $artBoard = $el.find(artBoardSelector),
		$title = $el.find(titleSelector);

	$el.css({
		top: $helper.offset().top,
		left: $helper.offset().left,
		width: $helper.width(),
		height: $helper.height()
	});
}

function setup() {
	var $el = $(this),
		$artBoard = $el.find(artBoardSelector),
		$title = $el.find(titleSelector);

	positions = {
		n: [
			$el.width() / 2,
			0 - (imageSize[1] * startScale)
		],
		ne: [
			$el.width() + (imageSize[1] * startScale),
			0 - (imageSize[1] * startScale)
		],
		e: [
			$el.width() + (imageSize[1] * startScale),
			$el.height() / 2
		],
		se: [
			$el.width() + (imageSize[1] * startScale),
			$el.height()
		],
		s: [
			$el.width() / 2,
			$el.height()
		],
		sw: [
			0 - (imageSize[0] * startScale),
			$el.height()
		],
		w: [
			0 - (imageSize[0] * startScale),
			$el.height() / 2
		],
		nw: [
			0 - (imageSize[0] * startScale),
			0 - (imageSize[1] * startScale)
		]
	}

	sizeArtBoard($artBoard, $title);
	fillArtBoard($artBoard);
}

function init() {
	clearTimeout(startTimeout);
	clearTimeout(endTimeout);

	$(itemSelector).removeClass('animate');
	$(captionSelector).removeClass('animate');

	if ($els.length) {
		$els.each(setup);
	}
}

$(window).on('resize', init);

init();
