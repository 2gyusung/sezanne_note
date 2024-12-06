# 심볼(Symbol)
```javascript
// 심볼(Symbol)
//  1. property key 
// 키와 같은 문자형이나 숫자형으로 지정이 가능
// 접근 할 때도 문자열로 접근이 가능
// 일반적으로 객체의 key를 이르는 말
// 유일한 식별자로 지정할 때 사용
// 심볼은 동일 한 값이 반환되지 않으며 선언 할 때 마다 다른 값으로 할당

{
  const a = Symbol()
  const b = Symbol()
  console.log(a, b) //Symbol() Symbol()
  console.log(a === b); //false
  console.log(a == b); //false
  
}
// - 심볼형은 유일성이 보장된다
// - 참조 문자열을 넣어도 심볼에 영향에 미치지 않는다
{
  const a = Symbol('id')
  const b = Symbol('id')
  console.log(a === b); //false
  
  
}

// 객체의 키로 사용
// object Methods로 접근이 가능 X
{
  const id = Symbol('id')
  const obj = {
    name : 'Mike',
    age : 40 , 
    [id] : 'myid' //Computed property
  }
  console.clear();
  console.log(obj);
  console.log(Object.keys(obj)); // ['name', 'age']
  console.log(Object.values(obj)); // ['Mike', 40]
  console.log(Object.entries(obj)); // ['name','Mike'],['age' 40]
  
}
```
# 참고 사이트
```
https://poiemaweb.com/es6-symbol

https://dev-ellachoi.tistory.com/105
```