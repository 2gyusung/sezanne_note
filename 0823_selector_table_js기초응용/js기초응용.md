```
'use strict'; :엄격하게 검사하겠다.
```
```javascript

// 총정리 실습. 적정 체중을 구하라
// 1. 적정 체중을 구하는 공식 => 적정체중 (신장 - 100) * 0.9
// - 신장을 저장할 변수
// 사용자의 체중을 저장할 변수
// 결과를 저장할 변수(연산자를 값을 구해야 한다.
// 출력

{   const userName = 'Lee Gyusung'
    const userHeihight = 180;
    const userWeight = 74;
    const nomal_w = (userHeihight - 100) * 0.9;


    document.write(`
        <h2>${userName}님의 적정체중은 ${nomal_w}입니다.</h2>
        `)

    document.addEventListener('DOMContentLoaded' , function(){ 
        document.body.innerText += `${userName}님의 적정체중은 ${nomal_w}입니다.`
    });
}
동적 프로그래밍
{
    const userName = prompt('당신의 이름은', "홍길동")
    const userHeihight = Number(prompt('당신의 신장은?', 100))
    const userWeight = Number(prompt('당신의 체중은?', 80))

    const normal_w = (userHeihight - 100) * 0.9; 
    const result_w = userWeight => normal_w - 5 && userWeight <= normal_w + 5
    const result = result_w ? '적정체중입니다' : '적정체중이 아닙니다'
    document.write(`
            <h2>
            <span style="color : blue;">${userName}</span>님의 체중은 <span>${userWeight}</span>이고, 적정체중은 <span>${normal_w}</span>으로 <span>${result}</span>
            </h2>
        `)
    console.log('춣력테스트');
}
```
```
// 미션 01
// 길동이의 하루 지출 내역이 다음과 같다.
// 하루 지출 비용의 합계를 구한 후 적정 지출인지 아닌지 비용으로 초과 여부를 출력하시오.
// 단 출력 형식을 준수 하시오.
/*길동이의 하루 지출 내역은
    교통비 3000원 식비 8000원 음료비 4000
    삼항 연산자를 사용하여 하루 적정 지출 비용을 초과 하였을 겨우
    '길동님의 하루 용돈은 20000원이며 총 지출 금액은 000원으로
    000원이 초과되었습니다' */
    /*길동님의 하루 용돈은 000원이며 총 지출 금액은 000원으로
    000원이 절약되었습니다' */


```
# 내가 입력한 값
```javascript
{
    const maxMoney = 20000
    const userName =  prompt('당신의 이름은?', '홍길동')
    const busMoney = Number(prompt('당신의 교통비는?', '10000'))
    const mealMoney = Number(prompt('당신의 식비는?', '10000'))
    const waterMoney = Number(prompt('당신의 음료비는?', '10000'))
    
    const cntMoney = busMoney + mealMoney + waterMoney
    const result = cntMoney > maxMoney ? '초과되었습니다' : '절약되었습니다'
   
     
      document.write(`
        <h2>
        <span style="color : blue;">${userName}</span>님의 버스금액은 <span>${busMoney}</span>이고, 식비는 <span>${mealMoney}</span>으로  음료비는 <span>${waterMoney} 총 금액은 ${cntMoney}</span>
        </h2>
    `)
   console.log(result);
   
    
}
```
# 선생님이 입력한 값
```javascript
const pm = 20000
const userName = prompt ('이름은','길동');
const price1 = Number(prompt('식비는?', 0))
const price2 = Number(prompt('식비는?', 0))
const price3 = Number(prompt('교통비는?', 0))

const total =price1 + price2 + price3;
const priceResult = pm - total;
const result = total < pm ? '절약되었습니다' : '초과되었습니다'

  document.write(`
        <h2>
        <span style="color : blue;">${userName}</span>님의 하루금액은 <span>${pm}</span>이고, 식비는 <span>${total}</span>으로  음료비는 <span>${priceResult} 총 금액은 ${result}</span>
        </h2>
    `)
   console.log(result);

```
```javascript
// 미션 02
/*다음은 연산자를 이용하여 평균 판매량을 구하고, 4분기 판매량을 평군 판매량의 이상/미달 값을 출력하시오
    질의 응답으로 4분기 판매량의 입력 받고 전분기 판매량보다 높거나 같은 경우 '평균 판매량 이상입니다' , 낮을 경우 '평균 판매량 이하입니다'
    라고 화면에 출력하시오
    
    판매량 : 1분기 2,000 / 2분기 1,500 / 3분기 1,000
*/

```
# 내가 쓴 답
```javascript
{
    const price4 = Number(prompt( '4분기의 평균량은?는?', '10000'))
    100
    const price1 = 2000
    const price2 = 1500
    const price3 = 1000
    const cntResult = (price1 + price2 + price3 ) / 3;

    const result = price4 > cntResult ? '판매량 이상' : '판매량 이하'

    document.write(`
        <h2>4분기 판매량은 ${result}
        `)

      console.log(result);
      
}  

```
# 선생님 답
```  javascript
  const price4 = Number(prompt( '4분기의 평균량은?는?', '10000'))
    100
    const price1 = 2000
    const price2 = 1500
    const price3 = 1000
    const cntResult = (price1 + price2 + price3)  / 3;

    const result = price4 > cntResult ? '판매량 이상' : '판매량 이하'

      console.log(result);
      

```