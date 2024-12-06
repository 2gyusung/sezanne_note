```javascript

// for문
// 조건식이 만족할 때 까지 특정 코드를 실행
// while문과 동일하며 조건식이나 초기값을 설정하는 것이 간편하다.
/*
형식
for(초기값; 조건값; 증가값) {
    실행코드...
}

*/

// 1부터 100까지의 숫자중 5의 배수일 때, 빨간색 7의 배수일 때 초록색, 5의 배수이며 7의 배수일 때 노란색으로 출력하시오
{
    for(let i = 1; i<=100; i++) {
       if(i % 5 == 0 && i % 7 == 0 ){
        document.write(`<h2 style="color: yellow;">${i}</h2>`);
       }else if( i % 7 == 0){
        document.write(`<h2 style="color: green;">${i}</h2>`);
       }else if(i % 5 == 0 ){
        document.write(`<h2 style="color: red;">${i}</h2>`);
        }else {
           document.write(`<h2 style="color: black;">${i}</h2>`);
        
       }
    }
}
```
# break문 (중요)
```javascript
// 1부터 10까지의 숫자 중 6일 경우 종료
// continue는 반복문에서만 사용한다.
// continue를 만나면 다음 문장을 실행하지 않고 조건식으로 되돌아 간다.
{
    for(let i =1; i <= 10; i++) {
        // console.log(i);
        if(i == 6) {
            break;
            console.log('6이요!');
            
        }
       
    }
}
// 1부터 10까지의 숫자 중 홀수만 출력하시오

{
    for(let j =1; j <= 10; j++) {
        // console.log(i);
        if( j  % 2 == 0) {
            continue;  // 건너뛰기
        }
        console.log(j);
    }
}

// * 사용자로 하여금 실행여부를 물어 결정 (동적인 요소[상태 변환 시 많이 사용된다]) *
{
    for(let k = 1; true; k++){
        alert(k + "번째 반복 실행되었습니다.")

    const isContinue =confirm('계속하시겠습니다?');
    if(!isContinue) {
        break;
    }
    }
    alert('Program Exit!')
}
```
# !true 관련 문제
```javascript

document.addEventListener('DOMContentLoaded', function(){
    const h1El =  document.getElementsByTagName('h1');
    const btn = document.getElementsByTagName('button');
    console.log(h1El , btn);
    
    
    let isTrue = false;


    btn[0].addEventListener ('click', function(){

        isTrue = !isTrue; /* 확실히 이해 할 것*/
        
        if(isTrue){
            h1El[0].classList.add('active');
            
            
        }else {
            h1El[0].classList.remove('active');
        }
        
    })
        
    
})
```
```javascript

// 단일for문 구구단 중 8단을 반복문으로 작성 하고 결과를 table로 표현하시오.


    for(i = 8; i <= 8; i++) {
        for(j = 1; j <= 9; j++){
            console.log(`${i} X ${j}는`,i*j);
            
            document.write(`<table border="1"><tr><td>${i} X ${j} =</td></tr></table>` ,  i*j);
            
        }
    }

    // 선생님이 입력해준 테이블 for문 구구단
    {
    document.addEventListener('DOMContentLoaded', function() {

        let table = '<table>';
        for(i = 1; i <= 9; i++) {
            table += '<tr>';
            table += `<td>8 X ${i} = ${8 * i}</td>`;
            table += '</tr>';
        }
        table += '</table>';
        document.body.innerHTML = table;
    });
}

// 중첩for문
// for문 안에 또 다른 for문이 있는 구조
// 안쪽 for문은 초기값 부터 조건식에 만족할 때 까지 실행된다.
// 바깥쪽 for문은 1번 실행될 때마다 안쪽 for문 전체가 실행된다

// 구구단을 2단 ~ 9단까지 출력하시오 단 Dom구조 table 속성에 출력하시오.
//내가 적은 정답
{
    document.addEventListener('DOMContentLoaded', function() {

        let table = '<table>';
        for(i = 2; i <= 9; i++) {
            for(j =1; j <= 9; j++){
                console.log(`${i} * ${j}는` , i*j);
                
                table += '<tr>';
                table += `<td>${i} X ${j} = ${i * j}</td>`;
                table += '</tr>';
            }
        }
        table += '</table>';
        document.body.innerHTML = table;
    });
}

//선생님 적어주신 정답
{
    let table = '<table>';
    for(i = 2; i <= 9; i++) {
        table += '<tr>';
        for(j =1; j <= 9; j++){
            console.log(`${i} * ${j}는` , i*j); // 원하는 결과값 맞는 지 확인
            table += `<td>${i} X ${j} = ${i * j}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    
    document.addEventListener('DOMContentLoaded', function() {
        this.body.innerHTML = table;
});
}


```
# 응용문제
```javascript
// 3행 5열의 표를 만들어라
// 각 열의 표시의 내용 1행 1열.. 로 표현 하시오

{
    let table = '<table>';
    for(i = 1; i <= 3; i++) {
        table += '<tr>';
        for(j =1; j <= 5; j++){
            console.log(`${i}행 * ${j}열는` ,); // 원하는 결과값 맞는 지 확인
            table += `<td>${i}행 ${j}열</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    
    document.addEventListener('DOMContentLoaded', function() {
        this.body.innerHTML = table;
});
}


// 피라미드 2  별(*) , 왼쪽 화면에 연속해서 하시오.

{
    let result = '';
    for(let i=1;  i < 15; i++) {
        for(let j = 15; j > i; j--) {
            result += '_';
        }
        for(let k= 0; k < 2*i-1; k++) {
            result += '*'

        } ;
         result += '<br/>';
        }
        document.write(result);
}

```
```javascript
// mission 01
// while문을 사용하여 구구단 중 5을 표로 출력하시오
{
   let table ='<table>';
   table += '<tr>';
   let i = 1; 
   while(i <= 9) {
    table += `<td> 5 X ${i} = ${5 * i}</td>`
    i++;
   }
   table += '</tr>'
   table += '</table>'
   document.write(table);
    
}
```
# 배열로 이용한 for문 예시
```javascript
const array = ['apple', 'banana' , 'cherry', 'watermalon', 'melon']
{
    let i = 0;
    while(i < array.length ){
        console.log(array[i]);
        
        i++;
    } 
}
```