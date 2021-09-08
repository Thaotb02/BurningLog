require(['jquery', 'jquery/ui', 'slick'], function($) {
    $(document).ready(function() {
        $('.row-sevice').slick({
       dots: false,
       infinite: true,
       speed: 300,
       arrows: false,
       slidesToShow: 3,
       slidesToScroll: 3,
       responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });


    $('.row-brand').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
         {
           breakpoint: 1280,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: false
           }
         },
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           }
         }
       ]
     });




    });
});


// up and down quantity 


// require(["jquery"], function($){
//   var minus = document.querySelector("#minus");
// var plus = document.querySelector("#plus");
// var input = document.querySelector("#input");

// var quantity = 1;

// input.value = quantity;

// minus.addEventListener('click', function(event){
//   if (quantity > 1) {
//       quantity --;
//     input.value = quantity;
//   }
// });

// plus.addEventListener('click', function(event){
//   quantity ++;
//   input.value = quantity;
// });
// });
