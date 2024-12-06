$(function () {
  // 축약형 실행문
  // $('선택자').css('속성', '값'); :실행문
  $("*").css("font-size", "13px");
  $("h1").css("color", "red");
  $("#firstTitle").css("color", "green");
  $(".nextTitle").css("color", "blue");
  $(".obj3").children(".theObj1").css("color", "purple"); //자식 요소
  $(".obj1").parent().css("border", "2px dashed #f00"); //부모요소
  $("#wrap h3").css("font-size", "20px").css("background", "yellow"); //여러개 지정 시
  $(".obj4").prev().css("color", "orange");
  $(".obj5").next().css("text-align", "right");
  $(".obj6").siblings("li").css("text-align", "center");
  $(":text").css({ "background-color": "yellow", border:'1px solid #000',color:'green',fontWeight:"bold" });
  
  // jquery2.html
  // 1 id=list1 인 요소에 <li>요소 중 홀수 인덱스만 선택 후 배경색상 적용
  $("#list1 li:odd").css("background","yellow")
  // 2 id=list1 인 요소에 <li>요소 중 짝수 인덱스만 선택 후 배경색상 적용
  $("#list1 li:even").css("background","gray")
  // 3 id=list1 인 요소에 <li>요소 중 <li> 요소만 선택 후 폰트색상 적용
  $("#list1 li:first").css("color","red")
  // $("ul li:first").css("color","red")
  
  // 4 id=list1 인 요소에 <li>요소 중 마지막번째 <li>요소만 선택 후 폰트색상 적용
  $("#list1 li:last").css("color","green")
  
  // 5 id=list1 인 요소에 <li>요소 중 두번째 <li>요소만 선택 후 폰트기울임 적용
  $("#list1 li").eq(1).css("font-style","italic")
  // $("#list1 li").eq(1).css({"font-style":"italic"})
  // $("#list1 li").eq(1).css({fontStyle:"italic"})
  
  // 6 id=list1 인 요소에 <li>요소 중 3번째 이전요소만 선택 후 2px 하늘색 점선 적용
  $("#list1 li:lt(2)").css("border","2px dotted aqua")
  
  // 7 id=list1 인 요소에 <li>요소 중 3번째 이후 요소만 선택 후 2px 보라색 점선 적용
  $("#list1 li:gt(2)").css("border","2px dotted purple")
  
  // 8 id=list2 인 요소에 <li>요소 중 2의 배수번째 요소만 선택 (인덱스와 상관없음)
  $("#list2 li:nth-child(2n)").css("background","orange")
  
  // 9 id=list2 인 요소에 <li>요소 중 내용이 '리스트11'이 포함된 <li>요소만 선택 (인덱스와 상관없음)
  $("#list2 li:contains('리스트11')").css("color","red")
  
  // 10 id=list2 인 요소에 <li>요소 중 태그 <span> 이 포함된 <li>요소만 선택 
  $("#list2 li:has('span')").css("color","aqua")
  
  // 11 id=list2 인 요소에 <li>요소 중 class="theObj"인  <li>요소만 선택 
  $("#list2 li").filter(".theObj").css("font-size", "20px")
  
  // 12 id=list2 인 요소에 <li>요소 중 하위요소 <a>요소만 선택
  $("#list2 li").find("a").css("background", "red")
  
});