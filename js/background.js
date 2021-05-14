var background = new Array();
background[background.length] = '../img/background/background_img01.jpg';
background[background.length] = '../img/background/background_img02.jpg';
background[background.length] = '../img/background/background_img03.jpg';
background[background.length] = '../img/background/background_img04.jpg';
background[background.length] = '../img/background/background_img05.jpg';

var obj = document.querySelector('body');
var size = Math.floor(Math.random()*(background.length));
j = (isNaN(size)) ? 0 : size;

obj.style.backgroundImage = 'url('+ background[size] + ')';
