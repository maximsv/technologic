$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// $(document).ready(function () {
//   $(".slider").slick({
//     // arrows:true,
//     // dots:true,
//     // slidesToShow:3,
//     // autoplay:true,
//     // speed:1000,
//     // autoplaySpeed:800,
//     // responsive:[
//     //   {
//     //     breakpoint: 768,
//     //     settings: {
//     //       slidesToShow:2
//     //     }
//     //   },
//     //   {
//     //     breakpoint: 550,
//     //     settings: {
//     //       slidesToShow:1
//     //     }
//     //   }
//     // ]
//   });

//   $(".top").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
//   });

//   //Аякс отправка форм
//   //Документация: http://api.jquery.com/jquery.ajax/
//   $(".forms").submit(function () {
//     $.ajax({
//       type: "POST",
//       url: "mail.php",
//       data: $(this).serialize(),
//     }).done(function () {
//       alert("Спасибо за заявку!");
//       setTimeout(function () {
//         $.magnificPopup.close();
//         $(".forms").trigger("reset");
//       }, 1000);
//     });
//     return false;
//   });

//   //Chrome Smooth Scroll
//   try {
//     $.browserSelector();
//     if ($("html").hasClass("chrome")) {
//       $.smoothScroll();
//     }
//   } catch (err) {}

//   $("img, a").on("dragstart", function (event) {
//     event.preventDefault();
//   });
// });
