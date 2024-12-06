$(function () {
  // $('선택요소').click(function(){
  // 실행문
  // })
  // $('선택요소').hide("속도", 콜백함수)
  // - 속도 :slow , normal , fast 또는 milliseconds(천분의 1초, 1000 = 1초)
  // - 콜백함수 : 메소드가 모두 완료된 후에 실행될 함수(생략가능)

  $("#btn1").click(function () {
    $(".box1").hide("slow")
  });
  $("#btn2").click(function () {
    $(".box1").show(1000)
  });
  $("#btn3").click(function () {
    $(".box2").toggle(1000)
  });
  $("#btn4").click(function () {
    $(this).parent().next().slideUp(500)
  });
  $("#btn5").click(function () {
    $(this).parent().next().slideDown('fast')
  });
  $("#btn6").click(function () {
    $(this).parent().next().slideToggle('fast')
  });
  $("#btn7").click(function () {
    $(this).parent().next().fadeOut(1000)
  });
  $("#btn8").click(function () {
    $(this).parent().next().fadeIn('slow')
  });
  $("#btn9").click(function () {
    $(this).parent().next().fadeToggle('normal')
  });
  //  $("#btn10").fadeTo('속도', 투명도 , 콜백함수)     // 투명도 : 0-1(값이 1에 가까울수록 선명해짐 값이 1이면 100% 노출됨)
  $("#btn10").click(function () {
    // $('.box3').fadeTo('속도', 투명도 , 콜백함수)
    $(this).parent().next().fadeTo('slow', .3)
  });
  $("#btn11").click(function () {
    // $('.box3').fadeTo('속도', 투명도 , 콜백함수)
    $(".box3").parent().fadeTo('slow', 1)
  });
}); //ready func
