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
  $(".click").click(function(){
    $("#image-nofade").fadeToggle("slow", "swing", "callback");
  });
  $("#buttonUp").click(function(){
    $("#sliding-info").slideUp();
  });
  $("#buttonDown").click(function() {
    $("#sliding-info").slideDown();
  });
  $("#buttonSlideToggle").click(function() {
    $("#image-nofade").slideToggle();
  });

});
