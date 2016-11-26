const $ = require('jquery');


document.addEventListener('DOMContentLoaded', () => {
  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

});
