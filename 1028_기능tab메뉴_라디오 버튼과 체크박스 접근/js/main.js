$(function(){
  // 실행문
  /* $("선택자")
  $("선택자").css("속성","값");
  $("선택자").css("속성","값").css("속성","값");
  $("선택자").css({속성:"값", 속성:"값"}); */

  /* $("선택요소").click(function(){
    실행문;
  }); */

  $("#btn1").click(function(){
    $("#textZone").css("color","blue");
  });

  $("#btn2").mouseover(function(){
    $("#textZone").css("background","yellow");
  });
  $("#btn2").focus(function(){
    $("#textZone").css("background","yellow");
  });

  // $("선택요소").bind("이벤트1 이벤트2", function(){ 
  //   실행문;  
  // })

  $("#btn3").bind("mouseover focus", function(){
    // $("#textZone").css("color","green").css("font-weight","bold");
    $("#textZone").css({color:"green", fontWeight:"bold"});
  })

  $("#listWrap").mouseenter(function(){
    $(".list1").css("display","block");
  });
  $("#listWrap").mouseleave(function(){
    $(".list1").css("display","none");
  });

  /* $("선택 요소").toggle(function(){
    실행문1;
  }, function(){
    실행문2;
    ...
  }, function(){
    실행문n
  }); */
  $("#btn4").toggle(function(){
    $(this).next().css("background","red");
  }, function(){
    $(this).next().css("background","orange");
  }, function(){
    $(this).next().css("background","yellow");
  }, function(){
    $(this).next().css("background","white");
  });

  $(".hover").hover(function(){
    $(this).css("color","red");
  }, function(){
    $(this).css("color","aqua");
  });
}); // ready func