﻿$(document).ready(function () {
  // 실제 스크립트 코드를 입력할 공간입니다.
  // 1초마다 현재 시간 값 재조정
  let timer = setInterval(function () {
    // 변수에 시간데이터  저장
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 시간이 한 자리 숫자일 때 앞에 0 붙이기
    if (hr >= 10) {
			hNum = hr
    }else {
			hNum = "0" + hr
		}

    // 분이 한 자리 숫자일 때 앞에 0 붙이기
    if (min >= 10) {
			mNum = min
    }else {
			mNum = "0" + min
		}
    // 초가 한 자리 숫자일 때 앞에 0 붙이기
    if (sec >= 10) {
			cNum = sec
    }else {
			cNum = "0" + sec
		}

    $("p span").eq(0).text(hNum);
    $("p span").eq(1).text(mNum);
    $("p span").eq(2).text(cNum);
  }, 1000);

	
	// 시간에 따라 화면 테마 변경
	let now = new Date();
	let hr = now.getHours();
	// 시간에 따라 화면 테마 변경
if(hr >= 5 && hr < 11 ) { // 현재 시간이 5시보다 같거나 크고, 11시보다 작을 때
	$('#wrap').removeClass()
	$('#wrap').addClass("morning")
	$('nav li').removeClass()
	$('nav li').eq(0).addClass('on')

}else if(hr >= 11 && hr < 16){// 현재 시간이 11시보다 같거나 크고, 16시보다 작을 때
	$('#wrap').removeClass()
	$('#wrap').addClass("afternoon")
	$('nav li').removeClass()
	$('nav li').eq(1).addClass('on')
	
}else if(hr >= 16 && hr < 20){// 현재 시간이 16시보다 같거나 크고, 20시보다 작을 때
	$('#wrap').removeClass()
	$('#wrap').addClass("evening")
	$('nav li').removeClass()
	$('nav li').eq(2).addClass('on')

}else if(hr >= 20 || hr < 5){// 현재 시간이 20시보다 같거나 크고, 5시보다 작을 때
	$('#wrap').removeClass()
	$('#wrap').addClass("night")
	$('nav li').removeClass()
	$('nav li').eq(3).addClass('on')
	
}
// nav 버튼 클릭시 화면 테마 변경
$('nav li').on('click', function(){
	let className = $(this).children('a').text() //<li><a href="#">morning</a></li> 이 텍스트를 가져와서  addclass 값에 대입한다
	$('nav li').removeClass()
	$(this).addClass("on")
	$('#wrap').removeClass()
	$('#wrap').addClass(className) //<li><a href="#">morning</a></li> 이 텍스트를 가져와서  addclass 값에 대입한다
})
});
