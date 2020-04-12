$(function() {
 
  const owl = $(".owl-carousel"),
        body = $("body"),
        btn = $(".js-burger"),
        popUpMenu = $(".js-menu"),
        callBtn = $('.js-call'),
        askBtn = $('.js-ask'),
        orderBtn = $('.js-order'),
        submitBtn = $('.js-submit'),
        form = $('.modal__form'),
        modal = $('.js-modal')
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
    modal.css('display', 'flex');
    body.css('overflow', 'hidden');
  });

  askBtn.on('click', function(){
    modal.css('display', 'flex');
    if(modalMail.css('display') == 'none') {
      modalMail.css('display', 'block');
    }
  
    body.css('overflow', 'hidden');
  });

  orderBtn.on('click', function(){
    modal.css('display', 'flex');
    if(modalMail.css('display') == 'none') {
      modalMail.css('display', 'block');
    }

    if(modalText.css('display') == 'none') {
      modalText.css('display', 'block');
    }
  
    body.css('overflow', 'hidden');
  });

  function modalClose(){
    modal.css('display', 'none');
    body.css('overflow', 'auto');

    if(modalMail.css('display') == 'block') {
      modalMail.css('display', 'none');
    }

    if(modalText.css('display') == 'block') {
      modalText.css('display', 'none');
    }

    $('.form__input[name=tel]').val('');
    $('.form__input[name=nik]').val('')
  } 

  modal.on('click', function(event){
    if (event.target == this) {
      modalClose();
    }
  });

  form.on('submit', function(event){
    event.preventDefault();
    console.log($(this).serialize());
    console.log($(this).serializeArray()[1].value);
    console.log($('.form__input[name=tel]').val());
    console.log($('.form__input[name=nik]').val());

    $.get(
      $(this).attr('action'),
      $(this).serialize(),
      function(data){
        if(data == '') {
          alert('Ошибка сервера, повторите попытку позже');
          modalClose();
        } else {
          alert(data);
          modalClose();
        }  
      }
    )
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
