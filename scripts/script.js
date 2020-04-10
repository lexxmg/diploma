$(function() {
 
  const owl = $(".owl-carousel"),
        body = $("body"),
        btn = $(".js-burger"),
        popUpMenu = $(".js-menu"),
        callBtn = $('.js-call'),
        modal = $('.js-modal');


  btn.on('click', function(){
    if(btn.attr("aria-expanded") == "false") {
      popUpMenu.slideDown(function(){
        btn.attr("aria-expanded", "true");
      });
    } else {
      popUpMenu.slideUp(function(){
        btn.attr("aria-expanded", "false");
      }); 
    }
  });

  callBtn.on('click', function(){
    modal.removeClass('modal--hidden');
    body.css('overflow', 'hidden');
  });

  modal.on('click', function(){
    modal.addClass('modal--hidden');
    body.removeAttr('style');
  });

  /*
  body.on('click', function(event){
    if(btn.attr("aria-expanded") == "true") {
      popUpMenu.slideUp(function(){
        btn.attr("aria-expanded", "false");
      });
    }
    console.log(event.target);
  });     
  */

  owl.owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    navText : ["",""],
    nav: false,
    dots: true,
    responsive:{
      0:{
        items: 1,
        margin: 20,
        loop: false
      },

      1000: {
        items: 2,
        loop: false
      },

      1210: {
        items: 3,
        dots: false,
        nav: true
      }
    }
  });

  new WOW().init();
});
