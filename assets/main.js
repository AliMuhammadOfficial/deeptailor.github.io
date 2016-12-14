const $ = require('jquery');
require('tooltipster');

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
      $('#nav-icon1.open span').css('background-color', 'white');
    } else{
      $('#menu').removeClass('show').addClass('hidden');
        $('#contact-menu').removeClass('show').addClass('hidden');
        $('#nav-icon1 span').css('background-color', 'black');
    }
	});

  $('#home').click(scrollTo("top-div"));
  $('#portfolio').click(scrollTo('portfolio-div'));
  $('#about').click(scrollTo('about-div'));
  $('#contact').click(scrollTo('get-intouch-container'));

  $('.bounce').click(scrollTo('portfolio-div'))

  window.addEventListener('scroll', () => {
    let scrollPos = $(window).scrollTop();
    if(scrollPos > $('.top-div').offset().top && scrollPos < $('.portfolio-div').offset().top){
      $('#home').css('color','gray');
      $('#portfolio').css('color','white');
      $('#about').css('color','white');
      $('#contact').css('color','white');
      $('#nav-icon1 span').css('background-color', 'black');
      $('#nav-icon1.open span').css('background-color', 'white');
      $('.link').addClass('animated slideInLeft');
      $('.project-description').addClass('animated slideInRight');
    }else if(scrollPos > $('.portfolio-div').offset().top && scrollPos < $('.about-div').offset().top){
      $('#home').css('color','white');
      $('#portfolio').css('color','gray');
      $('#about').css('color','white');
      $('#contact').css('color','white');
      $('#nav-icon1 span').css('background-color', 'white');
    }else if(scrollPos > $('.about-div').offset().top && scrollPos < $('.about-div').offset().top+ 400){
      $('#home').css('color','white');
      $('#portfolio').css('color','white');
      $('#about').css('color','gray');
      $('#contact').css('color','white');
      $('#nav-icon1 span').css('background-color', 'black');
      $('#nav-icon1.open span').css('background-color', 'white');
    }else if(scrollPos > $('.about-div').offset().top + 400){
      $('#home').css('color','white');
      $('#portfolio').css('color','white');
      $('#about').css('color','white');
      $('#contact').css('color','gray');
      $('#nav-icon1 span').css('background-color', 'black');
      $('#nav-icon1.open span').css('background-color', 'white');
    }
  });

  $('.tooltip').tooltipster({
    side: "bottom",
    animation: "grow",
    theme: "tooltipster-borderless"
  });

  $('.tooltip2').tooltipster({
    theme: 'tooltipster-shadow'
  });

});
