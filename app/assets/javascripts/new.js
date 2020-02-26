// $(document).ready(function() {
//   $("button").on('click', function(){
//     $(this).text("Hello");
//     $(this).css("background-color", "#686869"); 
//     $(this).css("color", "white");
//     $(this).off('click');
//   });
// });


$(document).ready(function() {
  $('button').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose').css("background-color", "#686869").css("color", "white");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        count = 0;
      }
    });
  });
});