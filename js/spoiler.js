// spoiler projects section
$(document).ready(function () {
   $('.spoiler-btn').click(function (event) {
      $(this).toggleClass('active').prev().slideToggle(1000);
   });
});