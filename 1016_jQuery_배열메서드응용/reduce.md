# reduce()
```javascript
// reduce()
// 각 요소에 대해 주어진 reduce 함수를 실행하고 하나의 결과값을 반환
// 누적 값을 얻고자 할 때 사용한다

{
  // 누적된 값을 구하고자 할 때
  const number = [1, 23, 44, 12, 10, 100];
  const result = number.reduce((acc, current) => { //[acc : 누적 값] , [current : 대상숫자]
    // console.log(array);
    console.log(acc);
    
    return current + acc;
  }, 1000);
  console.log(result);

/// 위 문제를 for of으로  문제를 만들기
  let sum = null;
  for(let num of number){
    sum+=num;
    
    console.log(sum);
  }
  // 배열에서 5의 배수만 점수만 모으기
  const arrayNum = number.reduce((pre,value)=> {
    if(value % 5 === 0) {
      pre.push(value)
    }
    return pre;
  } ,[])
  console.log(arrayNum);
  
}
```