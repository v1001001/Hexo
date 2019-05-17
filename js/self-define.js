jQuery(function($) {

const $container = $('.active.boxed') ;
const $body = $('body') ;
const $switch = $('.switch') ;
const $skinning = $('.skinning');
const $search = $('.form-control');
    $('.switch').on('click', () => {
     $body.fadeOut(1000);
      if ($switch.hasClass('day')) {
          $switch.removeClass('day').addClass('night');
              /* $body.css("@keyframes fade-in","0% {opacity: 0;}  40% {opacity: 0;} 70% {opacity: 0;} 100% {opacity: 1;}");
            $body.css(" @-webkit-keyframes fade-in", "0% {opacity: 0;}   40% {opacity: 0;} 70% {opacity: 0;} 100% {opacity: 1;}");*/
          $switch.css({'height':'500px', 'background-color':'white', 'animation': 'fade-in','animation-duration': '4s' , '-webkit-animation':'fade-in 1.5s'});
          $('<style>.switch::before, .switch::after{background-color:white}</style>').appendTo('head');
           $body.fadeIn();
         setTimeout(function () {
           $body.css('background', '#444');
           $container.css('background', '#333');
           $search.css('background-color', '#777');
           $('p').css('color','#f5f5f5');
            $('li a').css('color','#f5f5f5');
             $('h1 a').css('color','#f5f5f5');
           $('.entry-title').css('color','#f5f5f5');
           $('. navbar ').css('border-bottom', '2px solid #e7e7e7');
        }, 1000);

      } else {
          $switch.removeClass('night').addClass('day');
         /*  $body.css("@keyframes fade-in","0% {opacity: 0;}  40% {opacity: 0;} 70% {opacity: 0;} 100% {opacity: 1;}");
          $body.css(" @-webkit-keyframes fade-in", "0% {opacity: 0;}   40% {opacity: 0;} 70% {opacity: 0;} 100% {opacity: 1;}");*/
          $switch.css({'height':'400px', 'background-color':'#777', 'animation': 'fade-in','animation-duration': '4s' , '-webkit-animation':'fade-in 1.5s'});
           $('<style>.switch::before, .switch::after{background-color:#777}</style>').appendTo('head');
          $body.fadeIn();
        setTimeout(function () {
          $body.css('background', '#F2F2F2');
          $container.css('background', '#fff');
           $search.css('background-color', '#fff');
          $('p').css('color','#131313');
           $('li a').css('color','#141415');
            $('h1 a').css('color','#141415');
            $('.entry-title').css('color','#141415');
            $('. navbar ').css('border-bottom', '2px solid #020202');
        }, 1000);

      }
  });

  $skinning.on('mouseover',() =>{
  $skinning.css({'-webkit-animation-name':'box-animation', '-webkit-animation-duration':' 2s','-webkit-animation-iteration-count':'infinite'});
  });

});
