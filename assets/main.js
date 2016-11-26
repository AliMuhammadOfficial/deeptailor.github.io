const $ = require('jquery');


document.addEventListener('DOMContentLoaded', () => {
  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    if($('#menu').hasClass('hidden')){
      $('#menu').removeClass('hidden').addClass('show')
    } else{
      $('#menu').removeClass('show').addClass('hidden')
    }
	});

});
