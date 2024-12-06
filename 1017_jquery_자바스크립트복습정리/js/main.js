$(function () {
  // 실행문
  // $('선택자')
  // $('선택자').css("속성" , '값')
  // $('선택자').css("속성" , '값').css("속성" , '값')
  // $('선택자').css({속성 : '값', 속성 : '값'})

    // $('선택요소').click(function(){
    //    실행문;
    // })

    $('#btn1').click(function(){ //클릭 시
      $('#textZone').css("color" , 'blue')
    })
    // $('#btn2').mouseover(function(){ 마우스 호버 시
    //   $('#textZone').css("background" , 'yellow')
    // })
    $('#btn2').focus(function(){ //Tab 클릭시
      $('#textZone').css("background" , 'yellow')
    })
    // $('#btn3').bind('이벤트','이벤트2',function(){
    //   실행문
    // })
    $('#btn3').bind('mouseover','focus',function(){ // 2가지 이벤트 적용시
      // $('#textZone').css("font-weight" , 'bold').css("color" , 'green')
      $('#textZone').css({fontWeight : 'bold', color : 'green'}) 
       })

       $('#listWrap').mouseenter(function(){ //  마우스 호버 시 (포함)
        $('.list1').css("display" , 'block')
        
       })
       $('#listWrap').mouseleave(function(){//  마우스 호버 시 (제외)
        $('.list1').css("display" , 'none')

       })
      //   $('선택 요소').toggle(function(){
        // $('선택 요소').toggle(function(){ 

        // }, function(){

        // },function(){

        // })
        $('#btn4').toggle(function(){ //  토글
          $(this).next().css("background","navy")
        }, function(){
          $(this).next().css("background","blue")
          
        },function(){
          $(this).next().css("background","royalblue")
          
        },function(){
          $(this).next().css("background","skyblue")
          
        })

        $(".hover").hover(function(){
          $(this).css("color", 'red')

        },function() {
          $(this).css("color", 'tomato')
        })
}); //ready func
