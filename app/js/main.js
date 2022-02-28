$(function(){

    $('.design__slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/Arrow-left.svg"></img>',
        nextArrow: '<img class="arrow arrow-right" src="images/Arrow-right.svg"></img>',
        responsive: [
            {
              breakpoint: 501,
              settings: {
                variableWidth: false,
                slidesToShow: 1,
              }
            }
          ]
    });
});

