```javascript
// 중첩 if문(다중)
// 조건문 안에 또 다른 조건문이 있는 구조
// 조건문 1의 조건식이 만족할 때 안쪽의 코드를 실행


// 회원가입

{
    // DB에 저장되어 있는 데이터라고 가정
    
    const id = 'easy1234', pw ='112233'

    const userId = prompt('사용자 아이디?', 'a')
    const userPw = prompt('사용자 비밀번호?', 'a123')

    if(id == userId) {
        if(pw == userPw){
            alert(`${userId}님 반갑습니다.`)
        }else {
            alert(`비밀번호가 일치하지 않습니다.`)
            location.reload(); // 브라우저 새로고침
        }
    }else {
        alert('아이디가 일치하지 않습니다.')
        location.reload(); // 브라우저 새로고침
    }
}
```
# 응용문제
```javascript
/* 
if문 응용문제1
다음의 지문과 같이 요구 조건에 만족하는 결과를 완성하시오.
성별을 입력받아서 해당하는 부분의 문구를 출력하는 프로그램을 완성하시오.
단. 숫자로 받아서 표현하시오. 이상의 해당 성별이 없으면 다시 입력 받도록 한다.

결과(화면)
당신의 성별은 남성이군요. 
당신의 성별은 여성이군요. 
당신의 성별이 이상해요. 

if문 응용문제2
다음의 지문과 같이 요구 조건에 만족하는 결과를 완성하시오.
5과목의 점수가 있다고 가정하고 입력받는 값이 “합계”이면 합계값을 “평균”이면 평균값을 출력하는 프로그램을 작성하시오.
일치하는 값이 없으면 다시 입력받는 화면으로 이동하도록 작성하시오.

결과(화면)
5과목의 합계는 00점입니다. 
5과목의 평균은 00점입니다. 
*/


// 예제 문제 1

{
    const userId = prompt('성별 남자 "1", 성별 여성 "2"로 입력하시오?', 'a')
    
    if(userId == 1) {
        alert('남성입니다')
    }else if (userId == 2) {
        alert('여성입니다')
    }else {
            location.reload(); // 새로고침
    
    }
}

// 예제 문제 2
{

 const num1 = Number(prompt('수학 과목은 몇점입니까','10'));
 const num2 = Number(prompt('국어 과목은 몇점입니까','10'));
 const num3 = 50,  num4 = 60 ,  num5 = 80;
 const result = prompt('합계 , 평균값을 구하시오.');

 if(result == '합계'){
    const numPlus = num1 + num2 + num3 + num4 + num5
    console.log(numPlus);
    
 }else if (result == '평균') {
    const avg = (num1 + num2 + num3 + num4 + num5) / 5;
 console.log(avg);
 }else{
    console.log('일치하는 값이 없습니다');
    location.reload();
    
 }
}

// 스위치문의 풀이1
// 학생 a의 5과목에 대한 평균 값을 산출하고 산출된 결과의 점수를 다음과 같은 조건식에 대입하여
// a, b , c ,d  등급으로 출력하시오
// a는 평균 점수가 90점 이상
// b는 평균 점수가 85점 이상
// c는 평균 점수가 75점 이상
// d는 평균 점수가 65점 이상
// 
{
    const userName = prompt('학생의 이름은?', '홍길동')
    const study1 =  Number(prompt('학생의 5과목에 대한 국어 값을 점수 입력하세요'))
    const study2 =  Number(prompt('학생의 5과목에 대한 수학 값을 점수 입력하세요'))
    const study3 =  Number(prompt('학생의 5과목에 대한 사회 값을 점수 입력하세요'))
    const study4 =  Number(prompt('학생의 5과목에 대한 과학 값을 점수 입력하세요'))
    
    const studyAvg = (study1 + study2 + study3 + study4) / 4

    
    let result = null;
    
    
    if(studyAvg >= 90 && studyAvg <= 100) {
        result = 'A';
    }else if (studyAvg >= 80 && studyAvg <= 90){
        result = 'B';
    }else if (studyAvg >= 70 && studyAvg <= 79){
        result = 'C';
    }else if(studyAvg >= 60 && studyAvg <= 69) {
        result = 'D';
    }else {
        result = '';
    }
    
    switch(result) {
        case 'A' :  console.log(`${userName}님의 학점은 ${result}`)
        break;
        case 'B' :  console.log(`${userName}님의 학점은 ${result}`)
        break;
        case 'C' :  console.log(`${userName}님의 학점은 ${result}`)
        break;
        case 'D' :  console.log(`${userName}님의 학점은 ${result}`)
        break;
        default :  console.log(`${userName}님의 학점은 인정 되지 않습니다.`)
        
    }
    console.log(result);
    
    
}
```