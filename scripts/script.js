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
        modal = $('.modal'),
        modalCall = $('.js-modal-call'),
        modalAsk = $('.js-modal-ask'),
        modalOrder = $('.js-modal-order');


  btn.on('click', function(){
    if(btn.attr("aria-expanded") == "false") {
      popUpMenu.slideDown(function(){
        btn.attr("aria-expanded", "true");
        $('.burger__item--center').addClass('burger__item--center-a');
        $('.burger__item--top').addClass('burger__item--top-a');
        $('.burger__item--bottom').addClass('burger__item--bottom-a');
      });
    } else {
      popUpMenu.slideUp(function(){
        btn.attr("aria-expanded", "false");
        $('.burger__item--center').removeClass('burger__item--center-a');
        $('.burger__item--top').removeClass('burger__item--top-a');
        $('.burger__item--bottom').removeClass('burger__item--bottom-a');
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
