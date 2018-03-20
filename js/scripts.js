$(document).ready(function(){
  $(".clickable").click(function() {
    $("#image-showing").toggle();
    $("#image-hidden").toggle();
  });
  $("#button1").click(function() {
    $("#info").fadeOut("slow");
  });
  $("#button2").click(function() {
    $("#info").fadeIn(1500);
  });
});
