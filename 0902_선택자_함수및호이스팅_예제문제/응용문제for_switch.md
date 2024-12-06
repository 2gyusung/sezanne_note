```javascript

// // switch 응용문제 
{
  // 1번
    const weeks  = prompt('오늘의 요일을 입력해 주세요!' ,'월요일')
    console.log(`오늘은 ${weeks}입니다.`);

    const convertDay = weeks == '월요일' ? 1 : weeks == '화요일' ? 2 : weeks == '수요일' ? 3 : weeks =='목요일' ? 4 : weeks =='금요일' ? 5 : weeks =='토요일' ? 6 : weeks =='일요일' ? 7 :'';

    console.log(convertDay);
    
 // 2번
    switch(convertDay) {
        case 1 : console.log('오늘은 월요일입니다');
        break;
        case 2 : console.log('오늘은 화요일입니다');
        break;
        case 3 : console.log('오늘은 수요일입니다');
        break;
        case 4 : console.log('오늘은 목요일입니다');
        break;
        case 5 : console.log('오늘은 금요일입니다');
        break;
        case 6 : console.log('오늘은 토요일입니다');
        break;
        case 7 : console.log('오늘은 일요일입니다');
        break;
        default : console.log('해당하는 요일이 없습니다.');
        
        
    }
}
```
```JAVASCRIPT

// [Mission 2]
// 중첩 for문을 활용하여 구구단을 출력하시오.
// 구구단을 1단에서 20단까지 표를 출력하되 짝수단만 출력사에요
{
   let table ='<table>';
   table += '<tr>';
   for(i = 2; i <= 20; i++) {
    for(j = 1; j <= 9;  j++) {
        let result = i * j
        if(result % 2 == 0 ) {
          console.log(result);

            
        }
//             table += `<td>${i} X ${j} = ${i * j}</td>`;
    }
   }

   table += '</tr>'
   table += '</table>'
       document.addEventListener('DOMContentLoaded', function() {
            this.body.innerHTML = table;
            document.write(table);
        }
    )}

    {
      let star = '';
      for(let i=1; i <=5; i++) {
        for(let j= 1; j<=5; j++){
          if(j!=5) {
            star += '0'
          }else {
            star += '1\n';
          }
        }
      }
      console.log(star);
      
    }
```