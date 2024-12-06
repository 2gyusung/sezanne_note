```javascript
// DOM 활용하기
// node list -> 요소의 속성을 포함한 모든 구조
// 노드리스트에 접근 하려면 즉 DOM요소에 접근 하려면 

{
 const pEls = document.querySelectorAll('p') //NodeList(3) [p, p, p]
 console.log(pEls);
 
}

// 요소 노드를 생성하려면

{
  const pEl = document.createElement('p')
  
  // 텍스트 노드 생성
  const pElTextNode = document.createTextNode('Hello Create TextContent')

  // 텍스트 노드가 객체구조로 생성되었기 때문에 직접 사용할 수 없다
  // create로 생성된 모든 요소는 직접 사용할 수 없다
  // pEl.textContent = pElTextNode;
  // console.log(pEl); //p
    pEl.appendChild(pElTextNode)
    console.log(pEl);

    // container 삽입
    document.querySelector('.container').appendChild(pEl)
    
}
```