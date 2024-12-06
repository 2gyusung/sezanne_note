
* split : 인수 문자열 기준 분리
* slice(n,m) : n부터 m까지 문자반환
* subString(n,m) : n부터 m까지 문자반환 ,순서를 바꿔도 반환
* substr(n,m) : n부터 m개의 문자반환 ,순서를 바꿔도 반환
* splice


# String()
```javascript
// String()
//  문자열 메서드
// 문자열 표현 ->"",'',``
// html 은 작은 따옴표를 사용하면 편하다
{
  const element = '<h1 title ="h1 element"></h1>'
}
// 영어 문자는 큰 따옴표를 사용하면 편하다.
{
  const str = "It's Daejeon"
} 
```
```javascript
// backtick 스크립트
// 문자열의 길이를 구하고자 할 때 length
{
  console.log(('hello javascript!!').length); //18
  const str = 'hello javascript!!'
  console.log(str[2]); //l
  // str[5] = 'ttt' //접근이 가능하지만 값의 변경은 오류를 발생  
  
}
// 모든 영문자를 대문자 혹은 소문자로 변경
{
  const str = 'Hello World'
  console.log(str.toLocaleUpperCase()); //HELLO WORLD
  console.log(str.toLocaleLowerCase()); //hello world
  
}
```
```javascript
// indexOf() 색인
//  문자를 인수를 받아 몇 번째에 위치한 값인지 찾아서 인덱스 번호를 반환
// 찾는 문자열이 업을 경우 -1을 반환
// 찾는 문자열이 여러개 일 때 처음 위치한 인덱스 번호 반환

{
  const str = 'Hi , Hong Gildong , Hi ,Mini'
  console.log(str.indexOf("Hi")); //0 찾는 문자열이 여러개 일 때 처음 위치한 인덱스 번호 반환
  
}

// 만약 if문을 사용할 금칙어를 명확히 가려내는 프로그램을 작성하시오
{
  const str = '나는 콜라를 너무 좋아해!!'
  // 금칙어는 콜라
  // 금칙어가 있는지 여부를 판별하여 출력하시오

  console.log(str.indexOf('콜라'));

  if(str.indexOf('콜라') > -1) {
    console.log('콜라 그만 드세요');
   }
  
}
```
# slice(n,m)
```javascript
// slice(n,m)
// 특정 문자열 반환
// n에서 m가지의 문자열을 반환
// m을 생략할 경우 문자열의 끝까지 반환
// m은 m-1한 위치까지 반환 
// 만약 음수는 문자열의 뒤에서 부터 반환
{
  const str = 'abcdefg'
  console.log(str.slice(0,3)); //abc
  console.log(str.slice(2)); //cdefg
  console.log(str.slice(2 ,-2)); //cde
  
}
```
# substring(n,m)
```javascript
// substring(n,m)
// 특정 문자열을 반환
// n과 m사이의 문자열 반환
// n과 m의 위치를 바꿔도 동작한다
// 음수는 반환하지 않는다
{
   const str = 'abcdefg'
   console.log(str.substring(3,0)); //abc
   console.log(str.substring(2)); //cdefg
   
}
// substr(n,m)
// n은 시작번호, m은 문자의 갯수
{
  const str = 'abcdefg'
  console.log(str.substr(2,4)); //cdef
  console.log(str.substr(-4,2)); //de
  
}
```

```javascript
//문자열도 비교가 가능하다.
{
  console.log('a'.codePointAt()) //97 아스키
  console.log('A'.codePointAt()) //65 아스키
  console.log('a'>'A'); //true
  console.log('a'>'A'+3); //
  
}
```
# 문자처리 문제(본인)
```javascript
// 문자처리 문제
// 다음과 같은 문장에서 요구 사항을 화면에 표시하시오.
{
  const list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열"
  ];
  // 출력 
  // 들어가며 
  // JS의역사...
let list1 ='<ol>'
  for(i=0; i<list.length; i++){
    list1 +=`<li>${list[i].slice(3)}</li>`
    console.log(list[i].slice(3));
  }
  list1 += '</ol>'
 document.body.innerHTML = list1;
}
```
# 문자처리 문제 선생님 답 (원본 데이터 잃지 않기 위해서)
```javascript
{
  const list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열"
  ];

  const resultList = []
  resultList.push(list[0].slice(4));
  for(let i in list ){
    resultList.push(list[i].slice(4))
  }
  console.log(resultList);
  for(let i in resultList ){
   const liEl = document.createElement('li')
   liEl.textContent += resultList[i];
   document.body.appendChild(liEl)
  }
}
```
#  includes()
```javascript
// 콜라라는 금칙어
// includes() : 문자가 있으면 true 없으면 false

{
  const text = '너무 맛있는 콜라가 좋아!!'
  if(text.includes('콜라')) {
    console.log('코카콜라펩시');
    
  }
}
```