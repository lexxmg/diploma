$(function() {
 
  const owl = $(".owl-carousel"),
        body = $("body,html"),
        btn = $(".js-burger"),
        popUpMenu = $(".js-menu"),
        callBtn = $('.js-call'),
        askBtn = $('.js-ask'),
        orderBtn = $('.js-order'),
        submitBtn = $('.js-submit'),
        modalCloseBtn = $('.js-btn-close'),
        form = $('.modal__form'),
        modal = $('.modal'),
        modalCall = $('.js-modal-call'),
        modalAsk = $('.js-modal-ask'),
        modalOrder = $('.js-modal-order');

  function autoPadding(){
    let topBarHeight = $('.header__top-container').outerHeight();
    let headerPadding = $('.header').css('padding-left');
  
    $('.header__top-container')
      .addClass('header__top-container--fixed')
      .css('padding-right', headerPadding)
      .css('padding-left', headerPadding);

    $('.header').css('padding-top', topBarHeight);  
  }

  autoPadding();

  $(window).resize(autoPadding);

  btn.on('click', function(){
    if(btn.attr("aria-expanded") == "false") {
      popUpMenu.slideDown(function(){
        btn.attr("aria-expanded", "true");
        $('.burger__item').addClass('burger--animate');
      });
    } else {
      popUpMenu.slideUp(function(){
        btn.attr("aria-expanded", "false");
        $('.burger__item').removeClass('burger--animate');
      }); 
    }
  });

  body.on('click', function(){
    if(btn.attr('aria-expanded') == 'true') {
      popUpMenu.slideUp(function(){
        btn.attr("aria-expanded", "false");
        $('.burger__item').removeClass('burger--animate');
      });
    }
  });

  callBtn.on('click', function(){
    modalCall.fadeIn('200', function(){
      body.css('overflow', 'hidden');
    });
  });

  askBtn.on('click', function(){
    modalAsk.fadeIn('200', function(){
      body.css('overflow', 'hidden');
    });
  });

  orderBtn.on('click', function(){
    modalOrder.fadeIn('200', function(){
      body.css('overflow', 'hidden');
    });
  });

  function modalClose(){
    modal.fadeOut('200', function(){
      body.css('overflow', 'auto');
    });
    $('[name]').val('');
  }

  modalCloseBtn.on('click', modalClose); 

  modal.on('click', function(event){
    if (event.target == this) {
      modalClose();
    }
  });

  form.on('submit', function(event){
    event.preventDefault();
    console.log(this);
    console.log($(this).serialize());

    let arrData = $(this).serializeArray();

    for(let i = 0; i < arrData.length; i++){
      console.log(arrData[i].name + '=' + arrData[i].value);
    }

    if($(this).attr('method') == 'post') {
      $.post(
        $(this).attr('action'),
        $(this).serialize(),
        function(data, stat){
          console.log(stat);
          if(stat != 'success') {
            alert('Ошибка сервера, повторите попытку позже');
            modalClose();
          } else {
            alert(data);
            modalClose();
          }  
      });
    } else {
      $.get(
        $(this).attr('action'),
        $(this).serialize(),
        function(data, stat){
          console.log(stat);
          if(stat != 'success') {
            alert('Ошибка сервера, повторите попытку позже');
            modalClose();
          } else {
            alert(data);
            modalClose();
          }  
      });
    } 
  });

  $('.js-nav').on('click', function(event){
    event.preventDefault();

    let heightTopBar = $('.header__top-container').outerHeight();
    let href = $(this).attr('href');
    let offset = $(href).offset().top;

    console.log(href);
    console.log($(href));

    console.log(offset);

    body.animate({scrollTop: offset - heightTopBar}, 700);
    //$('.header__top').animate({top: offset});
  });
 
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
