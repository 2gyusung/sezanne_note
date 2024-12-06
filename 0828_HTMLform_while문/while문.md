```javascript
//  if문은 조건에 만족하면 여러개의 값을 한번 처리
// 반복문은 여러개의 조건식을 한번에 반복해서 실행
// 조건에 만족하면 중괄호(블록) 안의 코드 실행
// 조건식에 따라서 반복되는 횟수는 다르다.

// while문
// Hi라는 문자열을 콘솔창에 10번 반복해서 출력하자.
/*
    구조
    반복할 변수 선언 및 할당(반복 횟수의 초기값)
    let i = 1;
    
    초기값에서 부터 마지막 실행 즉 1에서 10까지라면
    i <= 10 -> 조건식에 들어가야 한다.
   
    while(조건식) {
    실행 할 코드
    반복변수(증가 값)
    i++;
    }
*/
{
    let i = 1;
    while(i<=10) {
        console.log('Hi', i);
        i++;
    }
}
    
// 1부터 100까지의 합을 구하는 프로그램을 작성하시오.
{
    let i = 1;
    let hap = 0;
    while(i<=100) {
        hap += i;
        i++;
    }
    console.log(hap);
    
} 

// 1부터 100까지의 짝수의 합을 구하시오
{
    let i = 1;
    let hap = 0;
    while(i<=60) {
        if(i % 2 == 0 && i % 6 == 0){
            console.log(i);
        }
        
        i++;
    }
}


// 30부터 10까지의 숫자 중 짝수일 경우 파란색 , 홀수일 경우 빨간색 (브라우저)

{
    let i = 30;
    while(i >= 10) {
        if(i % 2 == 0){
            document.write(`<h2 style="color: blue;">짝수입니다${i}</h2>`);
            
        }else {
            document.write(`<h2 style="color: red;">홀수입니다${i}</h2>`);
            
        }
        
        i--;
    }
}


// do ~ while문
// while문은 조건식이 만족 여부에 따라 실행
// do while문은 반드시 한번은 실행하고 조건식을 검사
{
    let i = 10;
    do {
        console.log('i'+ i);
        i++;
        
    }while( i< 15)
}

// break문 
// -for문, while문에서 break문을 만나면 즉시 실행 종료

{
    let i = 10;
    do {
        if(i == 13) {
            console.log('i'+ i);

        }
        
        ++i;
    }while( i< 15)
}

// 사용자로 하여금 실행여부를 물어 결과 반영하는 프로그램
{
    const isContinue = confirm('실행?')    
   
    while(isContinue) {
        console.log('Hi');
        break;
    };
}

// 구구단 중 2단을 출력하시오
{
    let i = 1
    while(i <= 9 ){
        console.log(`2 X ${i} =`, 2*1);
        i++;
        
    }
}


```
