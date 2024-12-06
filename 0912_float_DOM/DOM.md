
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
```