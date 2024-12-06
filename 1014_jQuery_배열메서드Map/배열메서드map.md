# 배열 메서드 map()
```javascript
// 배열 메서드
// map()
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 배열로 다시 반환하는 함수 메서드이다. (깊은 복사 가능)
// 배열을 다시 배열 다시 배열(배치)

{
  const number = [4, 9, 16, 25, 36];
  const resultNumber = [];
  const result = number.forEach(num=> {
    return resultNumber.push(num) // num : 배열 메서드 맨 마지막 요소 추가 하는 것
  })
  console.log('result', result); //result undefined
  console.log('resultNumber', resultNumber); //resultNumber (5) [4, 9, 16, 25, 36]
  
}

{
  const number = [4, 9, 16, 25, 36];
  const resultNumber = [];
  const result = number.forEach((num,idx)=> {
    return resultNumber.push(num * (num * idx)) // num : 배열 메서드 맨 마지막 요소 추가 하는 것
  })
  // console.log('result', result); //result undefined
  console.log('resultNumber', resultNumber); //resultNumber (5) [0, 9, 32, 75, 144]

  const result1 = number.map(Math.sqrt) //제곱근 활용
  console.log(result1); //(5) [2, 3, 4, 5, 6]
  
  // 함수 연산식을 활용
  const result2 = number.map(num => num +2)
  console.log(result2); // [6, 11, 18, 27, 38]
  
  // 함수 연산식을 활용2
  const result3 = number.map(num=> {
    return num * 5
  })
  console.log(result3); //[20, 45, 80, 125, 180]

    // 함수를 활용한 방법

    function multiplyTwo(numbers) {
      return numbers * 2
    }
    const result4 = number.map(multiplyTwo)
    console.log(result4); //[8, 18, 32, 50, 72]
    
  
      // 배열 객체 처리 
    const objList = [ //배열을 객체를 담을 수 있지만, 객체 하나에 여러개 담을 수 없다
      {id : 1, name : 'james'},
      {id : 2, name : 'bin'},
      {id : 3, name : 'john'},
      {id : 4, name : 'brian'}
    ]
    objList.forEach(list => {
      console.log(list.name); //james 객체 접근하는 방법
      return console.log(list); //{id: 1, name: 'james'}{id: 2, name: 'bin'}{id: 3, name: 'john'}{id: 4, name: 'brian'}
      
    })
    for(let list of objList){
      console.log(list);
      
    }
    objList.map(list=> console.log(list));//{id: 1, name: 'james'}{id: 2, name: 'bin'}{id: 3, name: 'john'}{id: 4, name: 'brian'}

    // 역순으로 배열 정의 
    const result5 = number.reverse()
    const result6 = number.map(num=> num * 5).reverse()
    console.log(result5); //[36, 25, 16, 9, 4]
    console.log(result6); // [20, 45, 80, 125, 180]

    const result7 = number //1
    .map(num=> num + 100)
    .sort((a,b) => b - a)
    console.log(result7); //[136, 125, 116, 109, 104]
    
    const result7 = number  //2
    .map(num=> num + 100)
    .sort((a,d) => d - a)
    console.log(result7); //[136, 125, 116, 109, 104]
    
    const result8 = number.map(item=> {
      return {number : item}
    })
    console.log(result8); //0: {number: 36} 1: {number: 25}
    
        // 다중 배열 처리
    const array = [
      [1,2,3] ,[4,5,6],[7,8,9]
    ]
    console.log(array[0][0]); //1

    const newArray = array.map(num => (
      num.map(list => list)
    ));
    console.log(newArray);

        // 배열에서 문자열 길이만 획득하기
    const arrA = ['Hello',"MyData","name",'id','Encapsulation']
    const arrB = arrA.map(item=> item.length);
    console.log(arrB);
    

}
```

```javascript
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        return response.json()
        
      })
      .then(data => {
        console.log(data);
        data.map(item=> {
          console.log(item);
          document.body.innerHTML +=`<h3>${item.title}</h3>`
        })
        
      })
      .catch(e=> console.log(e));
```