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
```javascript
// 장바구니 상품 추가 추가하기

  {
    const orderButton = document.querySelector('button')
    const orderInfo = document.querySelector('.result')
    const title = document.querySelector('.container h3')
 
      orderButton.addEventListener('click', ()=> {
        const pEl = document.createElement('p')
        pEl.textContent = title.textContent;
        orderInfo.appendChild(pEl)
        pEl.style.fontSize = '0.8em';
        pEl.style.color = 'royalblue';
      },{once : true})
    
  }

```

# 속성 요소 생성해서  추가

```javascript
// 속성 요소 생성해서  추가
{
  // 1 요소를 생성한다
  const newH2El = document.createElement("h2");
  // 2 생성한 요소에 삽입할 속성을 생성한다
  const newClass = document.createAttribute("class");
  //3. 생성한 속성에 값으로 active 삽입한다
  newClass.value = "active";
  // 일반적으로 자바스크립트에서 속성 추가하는 방식이고
  //4. 생성한 속성을 생성한 요소에 추가하기 위해서 다음과 같이... 
  newH2El.setAttributeNode(newClass);

  // 5.요소를 문서에 삽입한다
  newH2El.textContent = 'Hello New H2 Element'
  document.body.appendChild(newH2El)

}
```

# 예제문제
```javascript

{
  const root = document.getElementById('root')

  const h2El = document.createElement('h2')
  const h2Class = document.createAttribute('class')
  h2Class.value ="title"
  h2El.setAttributeNode(h2Class)
  h2El.textContent ='오늘의 수업 일과표'
  document.body.appendChild(h2El)

  const ulEl = document.createElement('ul')
  const ulClass = document.createAttribute('class')
  ulClass.value = 'list'
  ulEl.setAttributeNode(ulClass)
  document.body.appendChild(ulEl)

  const liEl1 = document.createElement('li')
  const liElClass1 = document.createAttribute('class')
  liElClass1.value = 'list-item'
  liEl1.setAttributeNode(liElClass1)
  liEl1.textContent='오전 : html , css ,jquery 개요와 구조에 대한 수업'
  ulEl.appendChild(liEl1)

  const liEl2 = document.createElement('li')
  const liElClass2 = document.createAttribute('class2')
  liElClass2.value = 'list-item'
  liEl2.setAttributeNode(liElClass2)
  liEl2.textContent='오후 : 자바스크립트의 구조와 개념에 작동원리'
  ulEl.appendChild(liEl2)
  

}
```