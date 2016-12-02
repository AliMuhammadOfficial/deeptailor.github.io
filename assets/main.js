const $ = require('jquery');


function scrollTo(div){

  return () => {
    var divPosition = $(`.${div}`).offset();
    $('html, body').animate({scrollTop: (divPosition.top+10)}, "slow");
  }

}

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader-container").style.display = "none";
  document.getElementById("main").style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
  myFunction();


  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    if($('#menu').hasClass('hidden')){
      $('#menu').removeClass('hidden').addClass('show');
    } else{
      $('#menu').removeClass('show').addClass('hidden');
        $('#contact-menu').removeClass('show').addClass('hidden');
    }
	});

  $('#home').click(scrollTo("top-div"));
  $('#portfolio').click(scrollTo('portfolio-div'));
  $('#about').click(scrollTo('about-div'));

  $('#contact').click(() =>{
    if($('#contact-menu').hasClass('hidden')){
      $('#contact-menu').removeClass('hidden').addClass('show')
    } else{
      $('#contact-menu').removeClass('show').addClass('hidden')
    }
  });

  $('.bounce').click(scrollTo('portfolio-div'))

  window.addEventListener('scroll', () => {
    let scrollPos = $(window).scrollTop();
    if(scrollPos > $('.top-div').offset().top && scrollPos < $('.portfolio-div').offset().top){
      $('#home').css('border-bottom','1px solid white');
      $('#portfolio').css('border-bottom','none');
      $('#about').css('border-bottom','none');
      $('#nav-icon1 span').css('background-color', '#1453ad');
    }else if(scrollPos > $('.portfolio-div').offset().top && scrollPos < $('.about-div').offset().top){
      $('#home').css('border-bottom','none');
      $('#portfolio').css('border-bottom','1px solid white');
      $('#about').css('border-bottom','none');
      $('#nav-icon1 span').css('background-color', 'white');
    }else if(scrollPos > $('.about-div').offset().top){
      $('#home').css('border-bottom','none');
      $('#portfolio').css('border-bottom','none');
      $('#about').css('border-bottom','1px solid white');
      $('#nav-icon1 span').css('background-color', '#1453ad');
    }
  });

});
