# toString()
```javascript

// Number와 Math
// toString()
// 숫자와 수학에 관한 자료형
// 10진수를 2진수나 16진수로 변환

{
  const num = 10
  console.log(typeof(num.toString())); //string
  console.log(num.toString(2)); //1010
  console.log(num.toString(8));; //12
  console.log(num.toString(16));; //a
  console.log((255).toString(16));; //ff
  
}
```
 # Math.pi
```javascript
// Math.pi
{
  console.log(Math.PI); //3.141592653589793
  
}
```
#  Math.ceil()
```javascript
// Math.ceil()
// 올림
{
  console.log(Math.ceil(5.1)); //6
  console.log(Math.ceil(5.7)); //6
  
}
```
# Math.floor()
```javascript
// Math.floor()
// 내림
{
  console.log(Math.floor(5.1)); //5
  console.log(Math.floor(5.7)); //5
}
```
# Math.round()
```javascript
//Math.round()
// 반올림
{
  console.log(Math.round(5.1)) //5
  console.log(Math.round(5.7)) //6
}
```
# 예제문제
```javascript
// 소수점 자릿수 표현
// 요구사항으로 소수점 둘째자리 까지 표현(셋째 자리는 반올림)
{
  const userRate = 30.1234;
  const convert = Math.round(userRate*100)/100
  console.log(convert); //30.12
  
}
```
# toFixed()
```javascript
// 소수점 자릿수 toFixed()를 사용해도 된다
// 인수를 받아 인수의 수치만큼 소수점 자릴수 표현
// 문자열로 반환 - 숫자로 반환 Number()
{
  const userRate =30.1234;
  const convert = userRate.toFixed(2)
  console.log(convert); //30.12 (문자)
  const convert1 = userRate.toFixed(0)
  console.log(convert1); //30  (문자)
  const convert2 = userRate.toFixed(6)
  console.log(convert2); //30.123400 (문자)
  
}
```
#  `isNaN` **
```javascript
// isNaN **
// - NaN인지 여부를 판단
{
  const number = Number('X')

  console.log(number); //NaN
  
  console.log("X" == NaN); //false
  console.log("X" === NaN); //false
  console.log(NaN == NaN); //false
  console.log(isNaN(number)); //true
  console.log(isNaN('X')); //true
  console.log(isNaN('abc')); //true
  console.log(isNaN(1)); //true
}
  
  // if(isNaN(number)) {
  //   alert('숫자를 입력')
  // }
  

```
# parseInt()
```javascript
// parseInt()
// 문자열을 숫자로 반환
// Number() 문자를 NaN으로 반환하지만 parseInt()는 읽을 수 있는 범위까지만 읽고 반환
// 두번째 인수를 받아 진수로 표현이가능

{
  const num = '10px';
  const num2 = 'f3';
  const num3 = '1234.1234'
  console.log(parseInt(num)); //10
  console.log(parseInt(num2)); //NaN
  console.log(parseInt(num2, 16)); //243
  console.log(parseInt(num3)); //1234
  
}
```