```javascript
        
      data.forEach((item, idx, arr)=> { //  ES6 문법에만 지원 가능하다 값 , 인덱스번호 , array있는 값
          console.log(item , idx , arr);
          
      })
      
```
# forEach 사용시 주의사항
```javascript
      // forEach 사용시 주의사항
      // ES6문법을 적용하여 생성된 데이터만 처리가 가능하다
      {
        document.addEventListener('DOMContentLoaded', ()=> {
          const es5H1Els = document.getElementsByTagName('h1');
          const es6H1Els = document.querySelectorAll('h1')
          console.log('es5H1Els',es5H1Els); //es5H1Els HTMLCollection(8) [h1, h1, h1, h1, h1, h1, h1, h1] 묶음
          console.log('es6H1Els',es6H1Els); // es6H1Els NodeList(8) [h1, h1, h1, h1, h1, h1, h1, h1] 배열의목록
          
          es6H1Els.forEach(item => {
            console.log(item);
            
          });
          for(let item of es5H1Els) {
            item.style.textDecoration = 'underline';
            item.textContent += 'HEADER!!'
            item.onclick = () => {
              item.style.background = 'royalblue'
            }
          }
        })
      }
```
```javascript
     // 스타일 조작하기
      // 문서 객체의 스타일을 조작할 때 사용 
      // - style속성은 객체이며, 내부에는 속성으로 css를 사용한다.
      //  css 입력할 때 사용하는 속성과 같이 입력한다
      //  css 속성중-(dash)를 사용할 수 없다
      //  css 속성의 dash 대신 대문자로 표기하여 사용한다 (camel case)

      // 25개의 태그를 활용하여 검은색에서 흰색으로 변환되는 박스를 완성하시오.() 
      {
        document.addEventListener('DOMContentLoaded', () => {
          const divEls = document.querySelectorAll('div')
          console.log(divEls);
          divEls.forEach((div ,idx)=> { //div 요소 idx 인덱스번호
            console.log(div ,idx);

            const val = idx * 10;
            div.style.height = '10px';
            div.style.backgroundColor = `rgb(${val},${val},${val})`;
          });
        })
      }
```
```javascript
//문서 객체 생성하기
      // -객체를 읽어 들여 조작하는 방법
      // -문서 객체를 생성하는 방법은 document.createElement() 메서드 사용 *
      // - * 문서 객체를 생성했다고 되는 것이 아니고 어디에 추가할지 지정
      // - 트리 구조로 나를 기준으로 부모와 자식을 지정해야 한다
      // - 문서 객체에 appendChild() 메서드를 사용하여 위치를 지정해야 한다. *

      {
        const h2El = document.createElement('h2');
        h2El.textContent = 'Header Create!!'
        h2El.style.color = 'tomato'
        h2El.style.fontSize = '28px'
        console.log(h2El);

        document.body.appendChild(h2El); //body의 자식이 되어 appendChild를 이용하여 추가한다
        
      }
```
# appendchild, createElement
document.createElement,
parent(부모).appendchild
```javascript
  btn.onclick = () => {
          document.body.appendChild(h2El)
        }
        // 다음과 같이 메뉴가 있다. 이 요소들을 각각 li로 목록을 생성하고 
        // ul list 라는 요소로  추가하시오 단 (list는 라인 2px , 안쪽 여백 20px 적용하시오)
   const menus = [
          'Home', 'About' , 'Product','Locate us' ,'Site map' , 'History'
        ];
        const ulEl = document.createElement('ul');
        ulEl.setAttribute('class' , 'list'); // class list 생성

        const listEl = document.createElement('li');
        listEl.textContent  = menus[0];
        ulEl.appendChild(listEl)
        
        for(let i in menus) {
          const listEl = document.createElement('li');
          listEl.textContent += menus[i]
          ulEl.appendChild(listEl);
        }
        console.log(ulEl);
        document.body.appendChild(ulEl);

```
```javascript
        {
        const inputEl = document.querySelector('input')
        
        inputEl.addEventListener('focus', ()=> {
          const spanEl = document.createElement('span')
          spanEl.innerText = '필수 입력 사항입니다!!'
          document.body.appendChild(spanEl)
        })
      }
```