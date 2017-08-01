particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

    //typewriter
$('.header-welcome p').type(function() {
	$('.header-welcome .tw-header-title').animate({opacity: 1}, 1500
	);
}, 70);