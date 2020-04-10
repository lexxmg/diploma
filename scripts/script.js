$(function() {
 
  const owl = $(".owl-carousel"),
        body = $("body"),
        btn = $(".js-burger"),
        popUpMenu = $(".js-menu"),
        callBtn = $('.js-call'),
        askBtn = $('.js-ask'),
        orderBtn = $('.js-order'),
        modal = $('.js-modal'),
        modalMail = $('.js-modal__mail'),
        modalText = $('.js-modal__text');


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

  askBtn.on('click', function(){
    modal.removeClass('modal--hidden');
    if(modalMail.css('display') == 'none') {
      modalMail.css('display', 'block');
    }
  
    body.css('overflow', 'hidden');
  });

  orderBtn.on('click', function(){
    modal.removeClass('modal--hidden');
    if(modalMail.css('display') == 'none') {
      modalMail.css('display', 'block');
    }

    if(modalText.css('display') == 'none') {
      modalText.css('display', 'block');
    }
  
    body.css('overflow', 'hidden');
  });

  modal.on('click', function(){
    modal.addClass('modal--hidden');
    body.removeAttr('style');

    if(modalMail.css('display') == 'block') {
      modalMail.css('display', 'none');
    }

    if(modalText.css('display') == 'block') {
      modalText.css('display', 'none');
    }
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
