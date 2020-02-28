// $(document).ready(function() {
//   $("button").on('click', function(){
//     $(this).text("Hello");
//     $(this).css("background-color", "#686869"); 
//     $(this).css("color", "white");
//     $(this).off('click');
//   });
// });


$(document).ready(function() {

  // ここから上のボタン

  $('.btnA').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeA").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeA").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnAsha').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeAsha").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeAsha").css("display", "none");
        count = 0;
      }
    });
  });
  $('.btnB').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeB").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeB").css("display", "none");
        count = 0;
      }
    });
  });
  $('.btnBsha').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeBsha").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeBsha").css("display", "none");
        count = 0;
      }
    });
  });
  $('.btnC').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeC").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeC").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnCsha').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeCsha").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeCsha").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnD').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeD").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeD").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnDsha').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeDsha").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeDsha").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnE').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeE").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeE").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnF').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeF").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeF").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnFsha').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeFsha").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeFsha").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnG').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeG").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeG").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  $('.btnGsha').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $(".codeGsha").css("display", "inline");
        $('#bottomP').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $(".codeGsha").css("display", "none");
        $('#bottomP').css("display", "block");
        count = 0;
      }
    });
  });
  // ここまで上のボタン

  // ここから下のボタン
  $('.btnmaj').each(function() {
    var elements = $(this);
    var count = 0;
    var defaultText = elements.text();
    elements.click(function() {
      if ( count === 0 ){
        elements.text('chose!!').css("background-color", "#686869").css("color", "white").css("text-align", "center");
        $('#c6').css("display", "none");
        count = 1;
      } else{
        elements.text(defaultText).css("background-color", "whitesmoke").css("color", "#686869");
        $('#c6').css("display", "block");
        count = 0;
      }
    });
  });
});