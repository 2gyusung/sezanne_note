# filter()
* 주어진 함수의 조건을 통과하는 모든 요소를 새로운 배열로 반환


```javascript

  const numbers = [1,2,3,4,5,6,7,8,9]
  const numArray = numbers.map(num => num *3)
  console.log(numArray);

  let sum = 0;
  for(let i = 0; i< numArray.length; i++) {
    if(numArray[i] % 2 === 0) {
      console.log(numArray[i]);
      sum += numArray[i]
    }
  }
  console.log(sum); //60
 
  for(let i in numArray){
    console.log(numArray[i]);
    
  }
  for(let item of numArray) {
    console.log(item)
  }
  numArray.forEach(item => console.log(item)
  );

 const resultNumber =  numArray.filter(num=> num % 2 === 0)
 console.log(resultNumber);

```
# 함수로 처리하는 방법 ,짝수인 숫자만 배열로 반환
```javascript

 const snacks = ['새우깡','프링글스','감자깡','꿀꽈배기','콘칩','바나나칩']

 const snacksResult = snacks.filter(item=> item.length>3)
 console.log(snacksResult); //['프링글스', '꿀꽈배기', '바나나칩']

//  함수로 처리하는 방법
function newSnaks(snack) {
  return snack.length > 3
};

const resultSnaks = snacks.filter(newSnaks)

console.log(resultSnaks); //['프링글스', '꿀꽈배기', '바나나칩']

// 짝수인 숫자만 배열로 반환
const evenNumber = snacks.filter(item => item.length % 2 === 0)
console.log(evenNumber); //(4) ['프링글스', '꿀꽈배기', '콘칩', '바나나칩']

```
# 검색 조건에 따른 필터링
```javascript

// 검색 조건에 따른 필터링
 const snacks = ['새우깡','프링글스','감자깡','꿀꽈배기','콘칩','바나나칩']
function filterItem(query) {
  return snacks.filter(snaks => snaks.indexOf(query) > -1)
}
const resultSnaks2 =filterItem('감자');
console.log(resultSnaks2); //['감자깡']

// 검색 조건에 따른 필터링 2
const fruits = ['Apple', 'Banana', 'Cherry','Orange','Grapes','Strawberry','Pear']

const filterFrutis = (query) => {
  return fruits.filter((el)=> {
   return el.toLowerCase().indexOf(query.toLowerCase()) > -1
  })
}
console.log(filterFrutis('ap')); // ['Apple', 'Grapes']
console.log(filterFrutis('an')); // ['Banana', 'Orange']

 
 
```