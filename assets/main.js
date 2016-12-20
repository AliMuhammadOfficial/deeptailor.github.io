const $ = require('jquery');
require('tooltipster');

function scrollTo(div){

  return () => {
    var divPosition = $(`.${div}`).offset();
    $('html, body').animate({scrollTop: (divPosition.top+10)}, 1200);
  }

}

// function myFunction() {
//     myVar = setTimeout(showPage, 1000);
// }

function showPage() {
  // document.getElementById("loader-container").style.display = "none";
  $('#loader-container').css('background', 'rgba(255,255,255,0.7)');
  $('#loader-container').addClass('animated slideOutUp');
  document.getElementById("main").style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
  // myFunction();

  $('<img/>').attr('src', 'https://res.cloudinary.com/deeptailor/image/upload/v1479596947/network-background_evo9bs.jpg').on('load',function() {
     $(this).remove(); // prevent memory leaks
     showPage();
  });

  $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
    if($('#menu').hasClass('hidden')){
      $('#nav-icon1').tooltipster('content', 'Close');
      $('#menu').removeClass('hidden').addClass('show');
      $('#nav-icon1.open span').css('background-color', 'white');
      $('#menu').addClass('animated bounceInDown');
    }else{
      $('#nav-icon1').tooltipster('content', 'Menu');
      $('#menu').removeClass('show').addClass('hidden');
      $('#contact-menu').removeClass('show').addClass('hidden');
      $('#nav-icon1 span').css('background-color', 'black');
      $('#menu').removeClass('animated bounceInDown');
    }
	});

  $('#home').click(scrollTo("top-div"));
  $('#portfolio').click(scrollTo('portfolio-div'));
  $('#about').click(scrollTo('about-div'));
  $('#contact').click(scrollTo('get-intouch-container'));

  $('.bounce').click(scrollTo('portfolio-div'))

  let wordArray = ['Software Engineer', 'Front-End Engineer', 'Back-End Engineer', 'Full-Stack Developer', 'Javascript Expert', 'React.js Master', 'Redux Optimizer',
  'Ruby Professional', 'Rails Afficionado', 'SQL Expert', 'Amazing Programmer', 'Technology Geek', 'Food Lover', 'Great Friend'];

  let position = 1;

  let interval = setInterval(() => {
    $('.profession').addClass('animated hinge');
    let randomWord = wordArray[position];

    setTimeout(() => {
      $('.profession').removeClass('hinge').addClass('bounceInUp');
      $('.profession').html(`${randomWord}`);
    }, 2000);

    if(position === wordArray.length-1){
      position = 0;
    }else{
      position++;
    }
  }, 10000);

  $('.profession').click(() => {
    $('.profession').addClass('animated hinge');
    let randomWord = wordArray[position];
    clearInterval(interval);

    setTimeout(() => {
      $('.profession').removeClass('hinge').addClass('bounceInUp');
      $('.profession').html(`${randomWord}`);
    }, 2000);

    if(position === wordArray.length-1){
      position = 0;
    }else{
      position++;
    }
  })

  window.addEventListener('scroll', () => {
    let scrollPos = $(window).scrollTop();
    let portfolioEnd = $('.portfolio-div').offset().top + $('.portfolio-div').outerHeight(true);

    if(scrollPos >= window.innerHeight/1.5){
      $('.portfolio-div-inner').addClass('animated fadeIn').css('visibility', 'visible');
    }

    if(scrollPos >= (portfolioEnd - (0.3*window.innerHeight))){
      $('.about-outer-container').addClass('animated fadeIn').css('visibility', 'visible');
      $('.get-intouch-container').addClass('animated fadeIn').css('visibility', 'visible');
    }



    if(scrollPos > $('.top-div').offset().top && scrollPos < $('.portfolio-div').offset().top){
      $('#home').css('color','gray');
      $('#portfolio').css('color','white');
      $('#about').css('color','white');
      $('#contact').css('color','white');
      $('#nav-icon1 span').css('background-color', 'black');
      $('#nav-icon1.open span').css('background-color', 'white');

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
    animationDuration: 150,
    theme: "tooltipster-borderless",
    delay: 50,
    distance: 10
  });

  $('.tooltip2').tooltipster({
    theme: 'tooltipster-shadow',
    animation: "grow",
    animationDuration: 150,
    delay: 50,
    distance: 10
  });

  $('.tooltip3').tooltipster({
    side: "bottom",
    animation: "grow",
    animationDuration: 150,
    theme: "tooltipster-borderless",
    delay: 50,
    distance: 10
  });

});
