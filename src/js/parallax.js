/**
 * Animate on scroll
 * Sets a number of css properties (with jQuery) on every scroll
 * Prerequisites is to add `transition: all 1s ease` or similar
 * to each of the relevant elements
 * @param  {array}         steps         an array with {'querySelectorTochange': {cssToChange}}
 * @param  {number}        duration      the duration of the `transition` (ms)
 * @param  {querySelector} sourceElement The element that has to be locked in view during the animation
 * @return {boolean}                     `true` when finished.
 */
function animateScroll(steps, duration, sourceElement) {
  var step = 0;
  var startedAnimating = false;

  if (!startedAnimating) {
    startedAnimating = true;
    $(window).on("wheel.hold touchmove.hold", unset);
    $(window).on("wheel.anim touchmove.anim", animate);

    function unset(e) {
      e.preventDefault();
      document.querySelector(sourceElement).scrollIntoView();
    }

    animating = false;

    function animate() {
      if (steps.length === step) {
        $(window).off(".hold .anim");
        return true;
      } else if (!animating) {
        animating = true;
        $(Object.keys(steps[step])[0]).css(steps[step][Object.keys(steps[step])[0]])
        setTimeout(function() {
          animating = false;
          step++;
        }, duration);
      }
    }
  }
}


//Document ready
$(function() {

  // prepare animations
  $('#iconGhent').css({
    transform: 'scale(0,0)'
  });
  $('#textGhent').css({
    transition: '.5s ease opacity',
    opacity: '0'
  });
  $('#iconCross').css({
    transform: 'scale(0,0)'
  });
  //$('#section2 .text').addClass('fly-in-before');

  var startedSection3 = false;

  var section2Top = $('#section2').offset().top;
  var section3Top = $('#section3').offset().top;

  var section3Bottom = $('#section3').offset().top + $(window).height();
  var section4Top = $('#section4').offset().top;
  var section6Top = $('#section3').offset().top;
  var currentProgress = 0;
  var section4Top = $('#section4').offset().top;


  $(window).scroll(function(e) {

    //Window scroll
    var wScroll = $(this).scrollTop();

    currentProgress = (wScroll / section6Top);
    console.log(currentProgress);
    if (currentProgress < 3.4) {
      $('#progressBar').css({
        'height': currentProgress * 33.33 + 'vh'
      });
    } else if (currentProgress > 3.4 && currentProgress < 3.5) {
      $('#progressBar').css({
        'height': 10 + 'vh'
      });
    } else if (currentProgress > 3.5) {
      $('#progressBar').css({
        'height': 0
      });
    }


    //Parallax intro
    if (wScroll < section3Top) {
      $('#intro p').css({
        'transform': 'translate(0px,' + wScroll / 10 + '%)'
      });

      $('#intro a').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
      });
    }


    //   $('#section2 p').css({
    //     'transform': 'translateY(-' + wScroll / 10 + '%)'
    //   });
    //
    //   $('.section2-image').css({
    //     'transform': 'translateY(' + wScroll / 60 + '%)'
    //   });
    // }
    //
    // if (wScroll > section3Top) {
    //
    //     console.log(wScroll);
    //
    //     $('#section4 p').css({
    //         'transform': 'translateY(-' + wScroll / 4 + '%)'
    //     });
    //
    //     $('.section4-image').css({
    //         'transform': 'translateY(-' + wScroll / 50 + '%)'
    //     });
    //
    //     $('.john').css({
    //         'transform': 'translateY(-' + wScroll / 50 + '%)'
    //     });
    // }

    //SECTION3
    if (wScroll > section3Top && wScroll < section3Bottom && !startedSection3) {
      if (animateScroll) {
        animateScroll([{
          '#iconGhent': {
            transform: ''
          }
        }, {
          '#textGhent, #iconCross': {
            opacity: '1',
            transform: ''
          }
        }], 500, '#section3');
      }
      startedSection3 = true;
    }


  });
});
