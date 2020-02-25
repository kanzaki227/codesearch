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
        elements.text('chose');
        elements.css("background-color", "#686869"); 
        elements.css("color", "white");
        count = 1;
      } else{
        elements.text(defaultText);
        $(this).css("background-color", "whitesmoke"); 
        $(this).css("color", "#686869");
        count = 0;
      }
    });
  });
});