# Type Conversion(형변환)
```javascript
//형변환 (Type Conversion)
// (ex) tyoescript > const num : number = 100;
// -자바스크립트에는 type을 정하는 규칙 , 규정이 없다.
//  위와 타입스크립트에서 형 지정을 하여 선언하지만 자바스크립트는 형을 지정할 수 없다.
// 자동 형 변환이 된다.
// 덧셈시 문자와 숫자를 더하면 NaN와 같이 의도하지 않은 값이 된다.
// - String() , Number() , Boolean()

{
  // Number()
  // 숫자형으로 변환 하는 것
//   형 변환자는 반드시 첫글자 대문자 명심
    const mathScore = Number(prompt('수학 점수는 ?' , 0))
    const engScore = prompt('영어 점수는 ?' , 0)
    const result = mathScore + Number(engScore)
    
    
    console.log(typeof mathScore);
    
    console.log(result);
    
}
```

```javascript
// 숫자나 문자가 변수에 할당 될 때 그 들어오는 값에 따라서 자동으로 형이 결정되는 것 => 자동 형 변환
// 개발자가 필요에 의해 데이터의 형 즉 변수의 형을 변경하는 것 => 명시적 형변환
{
    const mathScore = 100;
    const engScore = '80';
    const result = mathScore + Number(engScore);
    console.log(result);
    
}
```

```javascript
// String
// 문자형으로 변환 
    console.log(
        String(2),
        String(true),
        String(null),
        String(undefined)
    );

    console.log(
        Number(2),
        Number(true),
        Number(false),
        Number(null),
        Number(undefined)
    );

 ```
```javascript
// Boolean()
// false 값만 기억 -> 0
// 숫자 0, 빈 문자열 , null ,undefined , NaN 이거 외에는 true 값이다
{
    console.log(
        Boolean(''),
        Boolean(0),
        Boolean(null),
        Boolean(undefined),
        Boolean(NaN),
        Boolean(30),
        Boolean(-1),
        Boolean('Kim')
    );
    
}
 ```

```javascript
// 주의사항 
// - Number(null) => 0
// - Number(undefined) => NaN
// - prompt에서 취소 버튼을 누르면 null => 0
```
