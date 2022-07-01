$(function(){

    $('.header__slider').slick({
        fade: true,
        speed: 900,
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        speed: 900,
        asNavFor: '.header-slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 800,
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1030,
            settings: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $('.holder__slider').slick({
        fade: true,
        speed: 900,
        prevArrow: '<img class="holder__arrow holder__arrow-left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="holder__arrow holder__arrow-right" src="img/arrow-right.svg" alt=""></img>'
    });

    $('a[href*="#"]').on('click.smoothscroll', function( e ){
        var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
        if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
        var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
        if( ! $target.length ) return;
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 900, 'swing', function(){
        window.location.hash = hash;
        });
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></img></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></img></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity').each(function() {
        var parents = $(this).parents('.holder-slider__info');
        let summ = $('.nights', parents).val() * $('.summ', parents).data('nights') + ($('.guests', parents).val() - 1) * $('.summ', parents).data('guests');
        $('.summ', parents).html(summ - 1);
    });

    $('.quantity-button').on('click', function(){
        var parents = $(this).parents('.holder-slider__info');
        let summ = $('.nights', parents).val() * $('.summ', parents).data('nights') + ($('.guests', parents).val() - 1) * $('.summ', parents).data('guests');
        $('.summ', parents).html(summ - 1);
    });

    $('.surfboard-box__circle').on('click', function() {
      $(this).toggleClass('active');
    });
        
    $('.shop-slider').slick({
      speed: 900,
      prevArrow: '<img class="shop-arrow arrow-left" src="img/arrow-left.svg" alt=""></img>',
      nextArrow: '<img class="shop-arrow arrow-right" src="img/arrow-right.svg" alt=""></img>'
    });

    let date = new Date();
    $('.day').html(date.getDate());
    $('.month').html(date.getMonth() + 1);
    $('.year').html(date.getFullYear());

    $('.menu__btn').on('click', function() {
      $('.menu__list').toggleClass('active');
      $('.slider__arrow').toggleClass('none');
    });

    new WOW().init();

});
