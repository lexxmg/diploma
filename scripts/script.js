$(function() {
 
  const owl = $(".owl-carousel"),
        body = $("body,html"),
        btn = $(".js-burger"),
        header = $('.header'),
        headerTop = $('.header__top-container'),
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
    let topBarHeight = headerTop.outerHeight();
    let headerPadding = header.css('padding-left');
  
    headerTop
      .addClass('header__top-container--fixed')
      .css('padding-right', headerPadding)
      .css('padding-left', headerPadding);

    header.css('padding-top', topBarHeight);  
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
      body.addClass('off-scroll');
    });
  });

  askBtn.on('click', function(){
    modalAsk.fadeIn('200', function(){
      body.addClass('off-scroll');
    });
  });

  orderBtn.on('click', function(){
    modalOrder.fadeIn('200', function(){
      body.addClass('off-scroll');
    });
  });

  function modalClose(){
    modal.fadeOut('200', function(){
      body.removeClass('off-scroll');
    });
    $('[name]').val('');
    $('.modal__success').remove();
  }

  function popupSuccess(text){
    form.prepend(
      `<div class="modal__success modal-success zoomIn animated">
        <span class="modal-success__item">${text}</span>
      </div>`
    );
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
        $(this).serialize())
      .fail(err => popupSuccess('Ошибка сервера, повторите попытку позже'))
      .done(function(date){
        popupSuccess('Ваш запросс отправлен');
        alert(date);
        setTimeout(modalClose, 3000);
      });  
    } else {
      $.get(
        $(this).attr('action'),
        $(this).serialize())
      .fail(err => popupSuccess('Ошибка сервера, повторите попытку позже'))
      .done(function(date){
        popupSuccess('Ваш запросс отправлен');
        alert(date);
        setTimeout(modalClose, 3000);
      });
    } 
  });

  $.mask.definitions['~']='[78]';
  $('[type=tel]').mask("+~ (999) 999-99-99");

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
