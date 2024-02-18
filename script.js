$(document).ready(function () {
  $("#btn-search").click(function (event) {
    $(".input").val("http://tsociety.io/bootcamp");
    event.preventDefault();
  });

  $("img").click(function () {
    let currentImg = $(this).attr("src");
    let altImg = $(this).attr("alt-pic");

    $(this).attr("src", altImg);
    $(this).attr("alt-pic", currentImg);
  });
});
