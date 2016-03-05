$( document ).ready(function() {
  
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
  });

  $('.overlay li a').on( "click", function(){
    $('.overlay-close').trigger('click');
  });

});