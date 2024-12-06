﻿$(document).ready(function () {
  // 영역의 높이를 브라우저 높이값으로 자동 설정하기
  let ht = $(window).height();
  // console.log(ht);
  $("section").height(ht);

  // 브라우저가 리사이즈될때마다 브라우저와 section의 높이값을 갱신
  $(window).on("resize", function () {
    let ht = $(window).height();
    $("section").height(ht);
  });

  // 마우스의 움직임에 반응하는 서브 이미지 설정하기
  $("section").on("mousemove", function (e) {
    // 마우스 커서의 위치 저장
    let posX = e.pageX;
    let posY = e.pageY;
    // console.log(posX, posY);

    // 첫번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
    $(".p11").css({ bottom: 20 - posY / 30, right: 20 - posX / 30 });
    $(".p12").css({ right: 130 + posX / 20, bottom: -40 + posY / 20 });
    $(".p13").css({ right: 60 + posX / 20, top: 180 + posY / 20 });

    /* 이미지의 현재 위치 값에서 마우스 커서의 위치를 빼주면 이미지는 마우스가 움직일 때마다 반대방향으로 움직이고, 마우스 커서의 위치값을 더해주면 마우스가 움직이는 방향으로 움직임 */

    /* posX와 posY를 나누는 수치가 커질수록 마우스의 움직임에 따른 서브 이미지의 움직임의 폭이 작아지고, 나누는 수치가 적을수록 서브 이미지의 움직임의 폭은 커짐 */

    //두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $(".p21").css({ right: -180 - posX / 30, bottom: -480 - posY / 30 });
    $(".p22").css({ right: 130 + posX / 50, bottom: -40 + posY / 50 });

    //세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $(".p31").css({ right: 180 - posX / 30, bottom: 30 - posY / 30 });
    $(".p32").css({ right: 110 + posX / 20, bottom: -270 + posY / 20 });
    $(".p33").css({ right: -70 + posX / 20, bottom: -130 + posY / 20 });

    //네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
    $(".p41").css({ right: 20 - posX / 30, bottom: -120 - posY / 30 });
    $(".p42").css({ right: 0 + posX / 20, bottom: -180 + posY / 20 });
  });

  // 주메뉴 클릭 시 자동으로 상하 스크롤 시키기
  $("#menu li").on("click", function (e) {
    e.preventDefault();

    // 변수 ht에 브라우저 높이값 저장
    let ht = $(window).height();

    // 변수 i에 현재 클릭한 li의 순서값 저장
    let i = $(this).index();
    console.log(i);

    // 브라우저의 높이값 * 박스의 순서값 = 현재 박스의 스크롤 위치값
    let nowTop = ht * i;
    console.log(nowTop);
    // 해당 스크롤의 위치값으로 문서를 이동
    $("html,body").stop().animate(
      {
        scrollTop: nowTop,
      },
      1400
    );
  });
  // 화면이 스크롤 돨때 마다 현재 영역에 해당하는 메뉴 활성화 하기
  $(window).on("scroll", function () {
    let ht = $(window).height();

    // 변수 scroll에 현재 문서가 스크롤 된 거리 저장

    let scroll = $(window).scrollTop();
    for (let i = 0; i < 5; i++) {
      if (scroll >= ht * i && scroll < ht * (i + 1)) {
        $("#menu li").removeClass();
        $("#menu li").eq(i).addClass("on");
      }
    }
    // 마우스의 움직임에 따라서 화면 스크롤시키기
    $(function () {
      $("section").on("mousewheel", function (event, delta) {
        if (delta > 0) {
          // 마우스 휠을 올렸을 때 실행할 구문
					let prev = $(this).prev().offset().top; //문서 떨어진 거리값을 계산
					$("html , body").stop().animate({
						scrollTop:prev
					}, 1400);
        } else if (delta < 0) {
					// 마우스 휠을 내렸을 때 실행할 구문
					let next = $(this).next().offset().top; //문서 떨어진 거리값을 계산
					$("html , body").stop().animate({
						scrollTop:next
					}, 1400, "easeOutBounce");
				}
      });
    });
    // if (scroll > ht * 0 && scroll < ht * 1) {
    //   $("#menu li").removeClass();
    //   $("#menu li").eq(0).addClass("on");
    // }
    // if (scroll >= ht * 1 && scroll < ht * 2) {
    //   $("#menu li").removeClass();
    //   $("#menu li").eq(1).addClass("on");
    // }
    // if (scroll >= ht * 2 && scroll < ht * 3) {
    //   $("#menu li").removeClass();
    //   $("#menu li").eq(1).addClass("on");
    // }
    // if (scroll >= ht * 3 && scroll < ht * 4) {
    //   $("#menu li").removeClass();
    //   $("#menu li").eq(1).addClass("on");
    // }
  });
});

// https://easings.net/ko