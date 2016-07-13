//Document ready
$(function() {



  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('#intro p').css({
      'transform' : 'translate(0px,'+ wScroll /10 +'%)'
    });

    $('#intro a').css({
      'transform' : 'translate(0px,'+ wScroll /2 +'%)'
    });


    //Animations
    if(wScroll > $('#section2').offset().top - ($(window).height() / 3)) {
      $('#section2 p').addClass("fly-in-left");
    }

  });
});
