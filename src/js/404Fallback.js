$(function(){

  $.ajax({
    url: 'http://95.85.15.16/parking/',
    type: 'get',
    error: function() {
      $("#parkingFrame").replaceWith('<img src="src/img/fallbackimg.png" alt="fallback image" id="parkingFrame"/>');
      $("#section9").detach();
      $(".fallback").detach();
    }
  });

});
