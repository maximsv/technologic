$(document).ready(function () {
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //Аякс отправка форм
  //Документация: http://api.jquery.com/jquery.ajax/
  $(".forms").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      alert("Спасибо за заявку!");
      setTimeout(function () {
        $.magnificPopup.close();
        $(".forms").trigger("reset");
      }, 1000);
    });
    return false;
  });

  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch (err) {}

  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
});
