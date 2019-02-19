$(function() {

  $('#my-menu').mmenu({
    extensions: [ 'theme-black', 'pagedim-black' , 'position-right', 'fx-menu-slide'],
    navbar: {
      title: '<img src="img/logo-1.svg">'
    }
  });

  var api = $("#my-menu").data("mmenu");
  var menuBtn = $("header .hamburger");
   
  api.bind( "open:start", function() {
    menuBtn.addClass('is-active');   
  });
  
  api.bind( "close:finish", function() {
    menuBtn.removeClass('is-active');    
  });

});
