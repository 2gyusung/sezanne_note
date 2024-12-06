# 제어문
```javascript
// 제어문 
// 프로그램의 흐름을 제어할 수 있도록 해주는 문장
// 제어문의 조건식을 만족하지의 여부에 따라서 문장을 제어
// 조건식에는 if else , else if문 > 조건식에 따라 특정 코드 실행 *
// 선택문에는 switch문 > 값의 일치 여부에 따라 특정 코드 실행 *
// 반복문에는 while, for > 지정 횟수 만큼 반복 *
```
 # 조건문(if문)
```javascript
//  if문 
// 조건의 결과가 참인지 거짓인지 판별해서 해당 문장 실행

{
      const num1 = 100 , num2 = 50
    if(num1 == num2) {
        console.log('참값!');
        
    };
    console.log('Hi');



   const num1 = 100 , num2 = 50
    if(num1 != num2) {
        console.log('참값!');
        
    };
    console.log('Hi');
    
}
```
# 연습문제
```javascript
// 입력 값을 받아 조건식을 10000보 이상일 경우에만 출력하시오.
{
    const walkAmount = Number(prompt('당신의 하루 걷는 걸음은?', 0))
    if(walkAmount >= 10000) {
        document.write('<h2>좋은습관 굳</h2>')
    }
    document.write('<p>==========end======</p>')
}
```
```javascript
// 조건식에 0 , null , '',undefined, NaN을 입력하면 거짓이된다 * 중요 *
```
# 연습문제
```javascript
{
    const likeNum = Number(prompt('당신이 좋아하는 숫자는?', 0))
    if(likeNum % 2 == 0) {
        document.write(`<h2 style ='color : tomato;'>입력 받은 숫자는 ${likeNum}이며 홀수입니다</h2>`)
    }else {
        document.write(`<h2 style ='color : burlywood;'>입력 받은 숫자는 ${likeNum}이며 짝수입니다</h2>`)
    }

}
```
```javascript
// 확인 / 취소 창을 나타내어 회원 탈퇴 여부를 출력하시오.(alert)

{
    const result = confirm('회원 탈퇴하시겠습니까?')
    if(result) {
        document.write('회원 탈퇴가 완료되었습니다')
    }else {
        document.write('회원 탈퇴가 취소되었습니다')

    }
}
```
```javascript
// else if문 
// 두가지 이상의 조건과 정해놓은 조건을 만족하지 않았을 때 실행
//  현재는  몇월입니까? 결과를 해당하는 달과 연관된 문장으로 출력
{
    const mon = prompt('현재는 몇 월입니까?',0)
    //몇 월을 표현하려면 몇개의 조건이 필요할까?
    //  4개의 조건 9월 ~ 11월 가울 ,6월 ~ 8월 여름, 3~ 5월 봄, 12~ 2월 겨울

    if(mon >= 9 &&mon <= 11) {
        document.write('독서의 계절 가을이네요!')
    }else if(mon >=6 && mon <= 8 ){
        document.write('독서의 계절 여름이네요!')
    }else if(mon>= 3 && mon <= 5){
        document.write('독서의 계절 봄이네요!')
    }else {
        document.write('독서의 계절 겨울이네요!')
    }
}
```
```javascript
 // 삼항연산자로 변환
    mon >= 9 &&mon <= 11 ? document.write('독서의 계절 가을이네요!')
     : mon >=6 && mon <= 8 ? document.write('독서의 계절 여름이네요!') :
      mon>= 3 && mon <= 5 ?  document.write('독서의 계절 봄이네요!') : 
      document.write('독서의 계절 겨울이네요!')
```

