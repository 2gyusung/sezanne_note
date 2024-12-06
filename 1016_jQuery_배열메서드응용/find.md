# find()
## 주어진 판별 함수를 만족하는 `첫번째 요소의 값`을 반환 / 요소가 없다면 `undefined 반환`
```javascript

{
  const number = [1,10,5,7,50,140]
  const result = number.find(num=> num > 10) ;
    console.log(result) //50

  // 배열 내부의 특정 요소를 구하고자 할 때
  const obj = [
    {name : 'apple',quantity :2},
    {name : 'banana',quantity :4},
    {name : 'orange',quantity :8}
  ]
const resultObj = obj.find(fruit => fruit.name !== "banana")
const resultObj2 = obj.find(fruit => fruit.name === "banana")

  console.log(resultObj); //{name: 'apple', quantity: 2}
  console.log(resultObj2); //{name: 'banana', quantity: 4}

  const resultNum = number.map(num=> num * 3).filter(num=> num > 10)
  const resultNum2 = number.map(num=> num * 3).filter(num=> num > 10).find(num=> num > 100)
  
  console.log(resultNum);//(5) [30, 15, 21, 150, 420]
  console.log(resultNum2);//150
  

}
```