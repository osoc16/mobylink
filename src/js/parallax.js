//Document ready
$(function() {



  $(window).scroll(function(){

    //Window scroll
    var wScroll = $(this).scrollTop();

    //Parallax intro
    $('#intro p').css({
      'transform' : 'translate(0px,'+ wScroll /10 +'%)'
    });

    $('#intro a').css({
      'transform' : 'translate(0px,'+ wScroll /2 +'%)'
    });


    //Animations

    //SECTION2
    if(wScroll > $('#section2').offset().top - ($(window).height() / 3)) {
      $('#section2 p').addClass("fly-in-left");
    }

    if(wScroll > $('.section2-image').offset().top - ($(window).height() / 3)) {
      $('.section2-image').addClass("fly-in-right");
    }


  });
});
