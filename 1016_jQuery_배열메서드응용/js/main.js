// $(function () {
//   // 축약형 실행문
//   // $('선택자').css('속성', '값'); :실행문
//   $("*").css("font-size", "13px");
//   $("h1").css("color", "red");
//   $("#firstTitle").css("color", "green");
//   $(".nextTitle").css("color", "blue");
//   $(".obj3").children(".theObj1").css("color", "purple"); //자식 요소
//   $(".obj1").parent().css("border", "2px dashed #f00"); //부모요소
//   $("#wrap h3").css("font-size", "20px").css("background", "yellow"); //여러개 지정 시
//   $(".obj4").prev().css("color", "orange");
//   $(".obj5").next().css("text-align", "right");
//   $(".obj6").siblings("li").css("text-align", "center");
//   $(":text").css({ "background-color": "yellow", border:'1px solid #000',color:'green',fontWeight:"bold" });

//   // jquery2.html
//   // 1 id=list1 인 요소에 <li>요소 중 홀수 인덱스만 선택 후 배경색상 적용
//   $("#list1 li:odd").css("background","yellow")
//   // 2 id=list1 인 요소에 <li>요소 중 짝수 인덱스만 선택 후 배경색상 적용
//   $("#list1 li:even").css("background","gray")
//   // 3 id=list1 인 요소에 <li>요소 중 <li> 요소만 선택 후 폰트색상 적용
//   $("#list1 li:first").css("color","red")
//   // $("ul li:first").css("color","red")

//   // 4 id=list1 인 요소에 <li>요소 중 마지막번째 <li>요소만 선택 후 폰트색상 적용
//   $("#list1 li:last").css("color","green")

//   // 5 id=list1 인 요소에 <li>요소 중 두번째 <li>요소만 선택 후 폰트기울임 적용
//   $("#list1 li").eq(1).css("font-style","italic")
//   // $("#list1 li").eq(1).css({"font-style":"italic"})
//   // $("#list1 li").eq(1).css({fontStyle:"italic"})

//   // 6 id=list1 인 요소에 <li>요소 중 3번째 이전요소만 선택 후 2px 하늘색 점선 적용
//   $("#list1 li:lt(2)").css("border","2px dotted aqua")

//   // 7 id=list1 인 요소에 <li>요소 중 3번째 이후 요소만 선택 후 2px 보라색 점선 적용
//   $("#list1 li:gt(2)").css("border","2px dotted purple")

//   // 8 id=list2 인 요소에 <li>요소 중 2의 배수번째 요소만 선택 (인덱스와 상관없음)
//   $("#list2 li:nth-child(2n)").css("background","orange")

//   // 9 id=list2 인 요소에 <li>요소 중 내용이 '리스트11'이 포함된 <li>요소만 선택 (인덱스와 상관없음)
//   $("#list2 li:contains('리스트11')").css("color","red")

//   // 10 id=list2 인 요소에 <li>요소 중 태그 <span> 이 포함된 <li>요소만 선택
//   $("#list2 li:has('span')").css("color","aqua")

//   // 11 id=list2 인 요소에 <li>요소 중 class="theObj"인  <li>요소만 선택
//   $("#list2 li").filter(".theObj").css("font-size", "20px")

//   // 12 id=list2 인 요소에 <li>요소 중 하위요소 <a>요소만 선택
//   $("#list2 li").find("a").css("background", "red")

// })
$(function () {
  // 실행문
  // 13 class="theTitle"인 요소에 하위요소를 새요소를 바꿉니다
  // $("선택요소").html
  // $("선택요소").html("새요소")
  $(".theTitle").html();
  console.log($(".theTitle").html());
  $(".theTitle").html("<a href='#'>요소 객체 조작</a>");

  // 14 class="obj1"인 요소에 텍스트를 새텍스트로 바꿉니다
  // $("선택요소").text
  // $("선택요소").text("새텍스트")
  $(".obj1").text();
  console.log($(".obj1").text());
  $(".obj1").text("리스트_2");

  // $("새요소") 새요소 생성
  // 15 id="list3"인 요소에 마지막 위치에 새요소를 추가합니다
  // $("선택요소").append("새요소")
  //  $("#list3").append() //맨 뒤에 배치
  $("#list3").append("<li>list_6</li>");

  // 16 id="list3"인 요소에 첫 위치에 새요소를 추가합니다
  //  $("#list3").prepend() //맨 앞에 배치
  $("#list3").prepend("<li>list_1</li>");

  // 17 id="list3"인 5번째 li 요소 이전에 새요소를 추가합니다
  // $("새요소").insertBefore("요소선택");
  // $("list3 li").eq(4)
  $("<li>insertBefore</li>").insertBefore($("#list3 li").eq(4));

  // 18 id="list3"인 6번째 li 요소 이후에 새요소를 추가합니다
  // $("새요소").insertAfter("요소선택");
  $("<li>insertAfter</li>").insertAfter($("#list3 li").eq(5));

  // $("선택요소").clone(true/false)
  // $("새요소").appendTo("요소선택")
  // $("새요소").prependTo("요소선택")

  // 19 class="obj1"인 요소를 복제후에 id="list3"인요소 마지막 위치에 추가
  $(".obj1").clone().appendTo("#list3");

  // 20 id="list3"인 요소에 하위 <li>요소중 첫번째 요소 삭제
  // $("선택요소").remove()
  // $("선택요소").empty() : 요소의 콘텐츠는 유지되지만 모든 하위 요소는 (자식요소)가 삭제 됩니다
  $("#list3 li").eq(0).remove();

  // 21 id="list3"인 요소에 하위 <li>요소중 첫번째 요소에 클래스 값을 반환합니다
  // $("선택요소").attr("속성");
  // $("선택요소").attr("속성", "값");
  $("#list3 li").eq(0).attr("class");
  console.log($("#list3 li").eq(0).attr("class")); //obj1

  // 22 id="list3"인 요소에 하위 <li>요소중 첫번째 요소에 클래스 값을 새 데이터로 바꿉니다
  $("#list3 li").eq(0).attr("class", "obj2");
  $(".obj2").css("background", "yellow");

  // 23 id="list3"인 요소에 하위 <li>요소중 첫번째 요소에 클래스 값을 추가합니다.

  // $("선택요소").addClass("클래스명");
  // $("선택요소").removeClass("클래스명");
  // $("선택요소").toggleClass("클래스명");
  // $("선택요소").hasClass("클래스명");
  $("#list3 li").eq(0).addClass("obj3");
  $(".obj3").css("color", "red");

  // $("선택요소").wrap("<div></div>")
  // $("선택요소").wrapAll("<div></div>")
});
