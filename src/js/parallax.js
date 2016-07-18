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

  // prepare animation of icons flying in in #section3
  $('#iconGhent').css({
    transform: 'scale(0,0)'
  });
  $('#textGhent').css({
    transition: '1s ease opacity',
    opacity: '0'
  });

  var startedSection3 = false;


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
      if (!startedSection3) {
        animateScroll([{
          '#iconGhent': {
            transform: ''
          }
        }, {
          '#textGhent': {
            opacity: '1'
          }
        }], 1000, '#section3');
        startedSection3 = true;
      }
    }

  });
});
