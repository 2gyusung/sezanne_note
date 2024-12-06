# `Object methods` 와 `Computed property(계산된 객체)` 
```javascript

// Object methods 와 *Computed property(계산된 객체) *
//1. Computed property(계산된 객체)
// 객체 내부에서 키 대신 변수 내에 할당되어진 값으로 대체하여 사용
// 연산값을 키로 지정하여 사용 가능
{
  const a = 'address';
  const user = {
    name : 'Hong Gildong',
    age : 100,
    [a] : 'Seoul',
    [1+5] : 6
  };
  console.log(user); //{6: 6, name: 'Hong Gildong', age: 100, address: 'Seoul'} : Computed property(계산된 객체)
  delete user.address;
  delete user[a]; //{6: 6, name: 'Hong Gildong', age: 100}
  console.log(user);// //{6: 6, name: 'Hong Gildong', age: 100}
  console.log(user['name']);
  
}
// 어떤 내용이 키가 되고 값이 될 지 모르는 경우에 사용하면 편리하다
{
  function make (key , value) {
    return {
      [key] : value
    }
  };
  const obj1 = make('name', 'LEE')
  console.log(obj1);
  

}
// 생성자 함수 정의 구조대로 만드는 것
{
  function Item(title , price) {
    this.title  = title, //key value
    this.price = price, //key value
    this.showPrice = function() { //methods
      console.log( title + '가격은' , this.price, '원입니다') ;
      
    }
  }
  const item1 = new Item('인형', 30000);
  const item2 = new Item('가방', 30000);
  item1.showPrice() //인형가격은 30000 원입니다
  item2.showPrice() //가방가격은 30000 원입니다
  console.log(item1); //Item {title: '인형', price: 30000, showPrice: ƒ} // 생성자 함수 :정의 구조대로 만드는 것
  console.log(item2); //Item {title: '가방', price: 30000, showPrice: ƒ} // 생성자 함수 :정의 구조대로 만드는 것
  
}
```
# object Methods 
```javascript
// object Methods 
// 1. Object.assign()
// 객체를 복제하여 사용하고자 할 때
// 객체의 원본을 훼손하지 않는다

{
  const user = {
    name : 'kim',
    age  : 30
  }
  const cloneUser = user; // cloneUser 변수에 user 객체를 복사했다. -> 복사 x 
  // 기억장소의 100번지라는 것이 있다고 가정하고
  // user 객체는 100번지에 있는 데이터라고 가정하자
  // 위의 할당은 user가 가지고 있는 번지의 값을 참조하는 것


  cloneUser.address = 'Seoul';
  console.log('user:',user); //user: {name: 'kim', age: 30, address: 'Seoul'} 참조값만 복사
  console.log(cloneUser); //{name: 'kim', age: 30, address: 'Seoul'} 참조값만 복사
  

  const cloneUserTwo = Object.assign({eat : '고기'}, user)
  cloneUserTwo.color = '노랑';
  console.log(cloneUserTwo); //{eat: '고기', name: 'kim', age: 30, address: 'Seoul'}
}

 const user01 = {
    name : 'hong'
  }
  const user02 = new Object ({age : 50})
  console.log(user01, user02);

  const mergeUser = Object.assign(user01 , user02)
  console.log(mergeUser); //{name: 'hong', age: 50}
  

  // spread연산자 => ...
  const mergeUser02 = {...user01, ...user02};
  console.log('mergeUser02', mergeUser02); //{name: 'hong', age: 50}
  
 // assign , spread(2차원적인 구조)   -> shllaw copy(얕은 복사) : 1차원적인 구조 즉 객체안에 또 다른 객체에 대해서는 복사를 하지만 원본의 값이 변경 되면 해당하는 다른 객체의 값도 변경  원본이 바뀌면 복사본 바뀐다 
  // spread(1차원적인 구조) ... -> deep copy(깊은 복사)  원본이 바뀌면 복사본 안 바뀐다
  user01.hello = "Hi" 

  // JSON.parse(JSON.stringify(obj)) : 독립객체 deep copy(깊은 복사) : 단점 무거움
  // 재귀함수  deep copy(깊은 복사)
  // 외부라이브러리 -> lodash
//  반복문 
```
# 2. Object.keys()
```javascript
// 2. Object.keys()
// - 객체의 키를 배열로 반환
{
  const obj =  {
    name :'Hong', age: 100, gender : 'm'
  }
  console.log(Object.keys(obj)); //(3) ['name', 'age', 'gender']
   
}
```
# 3. Object.values()
```javascript
// 3. Object.values()
// - 객체의 값를 배열로 반환
{
  const obj =  {
    name :'Hong', age: 100, gender : 'm'
  }
  console.log(Object.values(obj)); //(3) ['Hong', 100, 'm']
   
}
```
# 4. Object.entries()
```javascript
// 4. Object.entries()
// - 객체의 키와 값을  배열로 반환(객체 구조의 배열화)
{
  const obj =  {
    name :'Hong', age: 100, gender : 'm'
  }
  console.log(Object.entries(obj)); // [Array(2), Array(2), Array(2)]  [name ,'Hong'] , [age, 100], [gender : 'm']
   
}
```
# 5. Object.fromEntries()
```javascript
// 5. Object.fromEntries()
// - 객체 구조의 배열화의 배열을 다시 객체로 변환
{
  const obj =  {
    name :'Hong', age: 100, gender : 'm'
  }
 const convert = Object.entries(obj) 
 console.log(Object.fromEntries(convert)); //{name: 'Hong', age: 100, gender: 'm'}
 
   const user = [
    ["name", 'Hong'],
    ['age', 100],
    ['gender', 'm']
   ]
   console.log(Object.fromEntries(user)); //{name: 'Hong', age: 100, gender: 'm'}
   
}
```
# 5 delete obj.name , 7 obj.address 
```javascript
// 6. delete obj.name;

// 7. obj.address 
```

```javascript
{
  const user = 'name'; //Computed property
  const obj = {
    1 : '1입니다',
    false : '거짓',
    [user] : 'Hong' //Computed property
  }
  console.log(Object.keys(obj)); // ['1', 'false']
  console.log(obj["1"]) //1입니다
  console.log(obj.false) //거짓
  console.log(obj.name) //Hong
  console.log(obj[user]) //Hong
  console.log(obj['user']) //undefined
  console.log(obj['name']) //Hong

}
```
# `참고 사이트`
```
https://ljtaek2.tistory.com/89
```