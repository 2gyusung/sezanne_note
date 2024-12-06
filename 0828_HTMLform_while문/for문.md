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