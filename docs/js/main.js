particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

    //typewriter
$('.header-welcome p').type(function() {
	$('.header-welcome .tw-header-title').animate({opacity: 1}, 1500
	);
}, 2);




$(document).ready(function() {
	$('.box-img').viewportChecker({
		classToAdd: 'box-img-filter',
		offset: 400
	});
	$('.my-img').viewportChecker({
		classToAdd: 'my-img-anim',
		offset: 350
});
});