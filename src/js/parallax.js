//Document ready
$(function() {

  // prepare animation of icons flying in in #section3
  $('#iconGhent').css({
    transform: 'scale(0,0)'
  })
  $('#textGhent').css({
    transition: '1s ease opacity',
    opacity: '0'
  })

  var steps = [{
    '#iconGhent': {
      transform: ''
    }
  },{
    '#textGhent': {
      opacity: '1'
    }
  }];

  var step = 0;


  $(window).scroll(function(e) {

    //Window scroll
    var wScroll = $(this).scrollTop();

    //Parallax intro
    $('#intro p').css({
      'transform': 'translate(0px,' + wScroll / 10 + '%)'
    });

    $('#intro a').css({
      'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });


    //Animations

    //SECTION2
    if (wScroll > $('#section2').offset().top - ($(window).height() / 3)) {
      $('#section2 p').addClass("fly-in-left");
      // pJSDom[0].pJS.particles.move.enable = false;
    }

    if (wScroll > $('.section2-image').offset().top - ($(window).height() / 3)) {
      $('.section2-image').addClass("fly-in-right");
    }

    //SECTION3
    if (wScroll > $('#section3').offset().top || wScroll < $('#section3').offset().bottom) {

      window.addEventListener("wheel", unset);
      window.addEventListener("touchmove", unset);


      function unset(e) {
        e.preventDefault();
        document.getElementById('section3').scrollIntoView();
      }

      animating = false;

      function animate() {
        if (steps.length === step) {
          window.removeEventListener("wheel", unset);
          window.removeEventListener("touchmove", unset);
        } else if (!animating) {
          animating = true;
          $(Object.keys(steps[step])[0]).css(steps[step][Object.keys(steps[step])[0]])
          setTimeout(function() {
            animating = false;
            console.log('animating');
            step++;
          }, 1000);

        }
      }

      $(window).on("wheel touchmove", animate);

    }

  });
});
