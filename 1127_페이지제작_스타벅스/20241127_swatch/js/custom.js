$(document).ready(function(){
	// 영역의 높이를 브라우저 높이값으로 자동 설정하기
	let ht = $(window).height();
	// console.log(ht);
	$("section").height(ht);

	// 브라우저가 리사이즈될때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize", function(){
		let ht = $(window).height();
		$("section").height(ht);
	});

	// 마우스의 움직임에 반응하는 서브 이미지 설정하기
	$("section").on("mousemove", function(e){
		// 마우스 커서의 위치 저장
		let posX = e.pageX;
		let posY = e.pageY;
		// console.log(posX, posY);

		// 첫번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
		$(".p11").css({bottom:20-(posY/30), right:20-(posX/30)});
		$(".p12").css({right:130+(posX/20), bottom:-40+(posY/20)});
		$(".p13").css({right:60+(posX/20), top:180+(posY/20)});

		/* 이미지의 현재 위치 값에서 마우스 커서의 위치를 빼주면 이미지는 마우스가 움직일 때마다 반대방향으로 움직이고, 마우스 커서의 위치값을 더해주면 마우스가 움직이는 방향으로 움직임 */
			
		/* posX와 posY를 나누는 수치가 커질수록 마우스의 움직임에 따른 서브 이미지의 움직임의 폭이 작아지고, 나누는 수치가 적을수록 서브 이미지의 움직임의 폭은 커짐 */

		//두 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p21").css({right:-180-(posX/30), bottom:-480-(posY/30)});
		$(".p22").css({right:130+(posX/50), bottom:-40+(posY/50)});

		//세 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p31").css({right:180-(posX/30), bottom:30-(posY/30)});
		$(".p32").css({right:110+(posX/20), bottom:-270+(posY/20)});
		$(".p33").css({right:-70+(posX/20), bottom:-130+(posY/20)});	
	
		//네 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p41").css({right:20-(posX/30), bottom:-120-(posY/30)});
		$(".p42").css({right:0+(posX/20), bottom:-180+(posY/20)});

	});
});















