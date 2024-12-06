
# 문서 객체 모델(DOM)
```javascript
// 문서 객체 모델
// 넓은 의미로 웹브라우저가 HTML 페이지를 인식하는 방식
// 작은 의미로는 document 객체와 관련된 객체의 집합
// 문서 객체 모델을 사용하면 HTML 페이지의 태그의 추가,제거,수정등을 할 수 있다.

// 문서 객체 조작하기
//. - 문서 객체를 조합해서 만든 전체적인 형태를 문서 객체 모델(DOM : Document Object Model)이라고 한다 많이 사용하는 용어(DOM)
//  문서 객체를 조작하는 작업 매우 복잡하지만 스크립트 등을 사용하여 좀 더 수월하게 작업이 가능해 진다.(프레임워크 vue,react..)

// DOMContentLoaded 이벤트
// 주의점 : 오탈자를 입력하여도 오류가 발생하지 않는다.
// HTML 문서는 위에서 아래 방향으로 즉 순차적 수행
// - innerHTML , innerText , textContent HTML 요소를 조작
// 조작하고자하는 요소가 스크리브와 연결되어있는 상태가 되어야 한다.

// h1의 텍스트를 수정하려고 한다
// 1. DOM구조에서 h1요소를 연결해야 한다
// 2. 연결된 요소에 innerText를 사용하여 텍스트를 변경한다(GOOD!!)
// 3. 연결시 고려사항을 필수적으로  생각해야 한다

// 문서 객체 가져오기 
// -head , body , title 등을 말한다.
{
  const head = document.head;
  console.log(head);
  
  const title = document.title;
  console.log(title);
  
  document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.body;
    console.log(body);

  })
  
}
```
```javascript
// body 요소 내부에 있는 요소를 선택하여 사용하려면 선택자가 필요하다.
// 태그를 조작하려면 선택자를 활용해야 한다.
// tag class id name....

{
  // ES5
  document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.getElementsByClassName('container')
    console.log(container);
    container[0].style.border ='1px solid royalblue';

    const h2El = document.getElementsByTagName('h2')[0];
    console.log(h2El);
    h2El.style.color = 'orange';

    const inputName = document.getElementsByName('id')
    console.log(inputName);
    
    const h2ElId = document.getElementById('title') //단일(유일한 값)
    console.log(h2ElId);

    
 // ES6
    const divContainer = document.querySelector('.container') // 하나만 불러 오면
    // 0개시 null로 나온다
    console.log(divContainer);
    const inputEls = document.querySelectorAll('input') // 여러개 불러 오면
    // 0개시 배열로 length : 0으로 나온다 
    console.log(inputEls);
    
    const h2ElClass = divContainer.querySelector('h2') //container 기점 h2를 찾는다 (단일)
    console.log(h2ElClass);
    
    const checks = document.querySelector('[type=checkbox]') //<input type="checkbox">
    console.log(checks);
    
    
  })

} 
```
# 태그를 추출하고 조작하는 방법
```javascript

// 태그를 추출하고 조작하는 방법
{
  // -태그를 메서드로 선택하고 조작하는 기본 방법
  document.addEventListener('DOMContentLoaded', ()=> {
    
    const title = document.querySelector('h1');
    console.log(title);
    title.textContent += ':Hello!!' //텍스트 요소
    title.style.color = 'tomato';
    title.style.cssText = 'background-color: red; color: white;'
    const text = title.textContent;
    console.log(text); //DOM Structure!!:Hello!!
    const text1 = title.innerText;
    console.log(text1); //DOM Structure!!:Hello!!
    
    
  })
}
```