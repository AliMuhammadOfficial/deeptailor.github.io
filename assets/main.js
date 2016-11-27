const $ = require('jquery');


function scrollTo(div){

  return () => {
    var divPosition = $(`.${div}`).offset();
    $('html, body').animate({scrollTop: (divPosition.top+10)}, "slow");
  }

}

document.addEventListener('DOMContentLoaded', () => {
  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    if($('#menu').hasClass('hidden')){
      $('#menu').removeClass('hidden').addClass('show');
    } else{
      $('#menu').removeClass('show').addClass('hidden');
        $('#contact-menu').removeClass('show').addClass('hidden');
    }
	});

  $('#portfolio').click(scrollTo('portfolio-div'));
  $('#about').click(scrollTo('about-div'));

  $('#contact').click(() =>{
    if($('#contact-menu').hasClass('hidden')){
      $('#contact-menu').removeClass('hidden').addClass('show')
    } else{
      $('#contact-menu').removeClass('show').addClass('hidden')
    }
  });

});
