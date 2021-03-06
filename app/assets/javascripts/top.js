$(function(){
  var effect_pos = 5; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 80; // エフェクトの時間(ms) 1秒なら1000

  // フェードする前のcssを定義
  $('.wrapper').css({
    opacity: 0,
    transform: 'translateY('+ effect_move +'px)',
    transition: effect_time + 'ms'
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
    var scroll_top = $(this).scrollTop();
    var scroll_btm = scroll_top + $(this).height();
    effect_pos = scroll_btm - effect_pos;

    // effect_posがthis_posを超えたとき、エフェクトが発動
    $('.wrapper').each( function() {
        var this_pos = $(this).offset().top;
        if ( effect_pos > this_pos ) {
          $(this).css({opacity: 1, transform: 'translateY(0)'});
          $('.bg-video-wrap').slideUp(300);
        }
    });
  });
});