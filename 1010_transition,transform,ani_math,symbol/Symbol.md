# 심볼(Symbol)
```javascript
// 심볼(Symbol)
//  1. property key 
// 키와 같은 문자형이나 숫자형으로 지정이 가능
// 접근 할 때도 문자열로 접근이 가능
// 일반적으로 객체의 key를 이르는 말
// `유일한 식별자`로 지정할 때 사용
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


# 전역 Symbol()
```javascript
// 전역 Symbol()
// 일반 Symbol() : 새로 만들 때 만듬
// Symbol은 같은 이름 하더라도 전혀 다른 객체
// Symbol.for() 메서드는 하나를 생성한 뒤 키를 통해 같은 심볼을 공유
// 이름이 같으면 같은 객체로 지정할 때가 잇다(전역변수)
// 하나의 심볼만 보장 받을 수 있다. 없으면 만들고 있으면 참조

{
  const id1 = Symbol.for('id') //아이디라는 심볼을 제작(예 :문패)
  const id2 = Symbol.for('id')  //없으면 만들고 *있으면 참조
  const id3 = Symbol.for('id3')  //없으면 만들고 *있으면 참조
    console.log(id1 === id2); //true
    console.log(id1 === id3); //false
    
}
```
# Symbol.keyFor()
```javascript
// Symbol.keyFor()
// 생성할 때 적었던 이름을 알려준다
// 전역 심볼로 생성되어야 사용할 수 있다
// 그렇지 않은 경우 description 속성을 사용해야 한다.
{
  const id1 = Symbol.for('id') //아이디라는 심볼을 제작(예 :문패)
  // const id2 = Symbol('id') //설명
  const id2 = Symbol('new creat id num') //설명
  console.log(Symbol.keyFor(id1)); //id
  console.log(Symbol.keyFor(id2)); //undefined
  console.log((id2.description));  //id
  
}
```
```javascript
// 숨겨진 심볼을 보려면 
{
  const id = Symbol('id')
  const user = {
    name :'Mike',
    age : 50,
    gender : 'm',
    [id] : 'myid'
  }
  console.log(user); //{name: 'Mike', age: 50, gender: 'm', Symbol(id): 'myid'}
  console.log(Object.keys(user)); // ['name', 'age', 'gender']
  console.log(Object.getOwnPropertySymbols(user)); // **[Symbol(id)] getOwnPropertySymbols:프로퍼티를 찾는 속성**
  console.log(Reflect.ownKeys(user)); //(4) ['name', 'age', 'gender', Symbol(id)]
  
  // 참조 : 예를 들어 다른 개발자가 작성한 객체와 사용자가 추가한 객체가 같다면 혼동될 것이다. 하지만 심블을 사용하면 유일한 객체가 된다.
}
{


    const user = {
      name : 'Gildong',
      age : 20
    }
    // 200 lines
    
    // user.showName = function() {
      //   console.log(this.name);
      
      // }
      // user.showName()
      
      const showName = Symbol('show name!!')
      user[showName] = function() {
        console.log(this.name + '입니다');
        
      }
      console.log(user); //{name: 'Gildong', age: 20, Symbol(show name!!): ƒ}
      user[Symbol('show name!!')] = 500;
      
      for(let key in user) {
        console.log(key); //name
        console.log(user[key]);//Gildong 20
        
        
      }
    }
  
```