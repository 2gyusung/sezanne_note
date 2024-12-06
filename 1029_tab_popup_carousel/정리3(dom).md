# DOM과 DOM tree
## event
### 문서 로딩: abort , error , load , resize , scroll, onload
```javascript
// DOM과 DOM tree
// DOM(document object model)
// form 요소 접근하려면 기존 방식, 선택자를 활용하여 접근


// event
// 문서 로딩: abort , error , load , resize , scroll, onload

// window.onload = alert('안녕하세뇨!!')
  // console.log(window.scrollY) 
```
```javascript
// 마우스 이벤트 : click, dbclick , mousedown , mousemove  , mouseover, mouseout , mouseup
```
```javascript
// 키보드 이벤트 : keydown(키를누르면) , keypress(키를 떼면 한 자에 다음 자를 넘어가면) , change 이벤트랑 같이 슨다  ,keyup


// 키보드 이벤트 : keydown(키를누르면) , keypress(키를 떼면 한 자에 다음 자를 넘어가면)  ,keyup
{
  window.addEventListener('keydown',(e)=> {
    console.log('code : ', e); //KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …
    console.log('code : ', e.code); //code :  KeyA
    console.log('code : ', e.key); //code :  a
    console.log('code : ', e.keyCode); //code :  65
    
    
  })
}
```
```javascript

// 폼 이벤트 : blur , change , focus , reset , submit

{
  const inputEl = document.querySelector('input')
  window.addEventListener('load', ()=> {
    inputEl.focus()
  })
  inputEl.onchange = (e) => { //**
    console.log(e.target.value);
    
  }
  
}

```
```javascript
// 모달 박스 만들기

{
  const openModal = document.querySelector("#open");
  const closeModal = document.querySelector("#close");
  const modalBox = document.querySelector("#modal-box");
  console.log(closeModal, openModal, modalBox);

  openModal.onclick = function () {
    modalBox.classList.add('active')
  };
  closeModal.onclick = () => {
    modalBox.classList.remove('active')
  }
}
```


# Carousel 구현
```javascript

.container {
  width: 1200px;
  height: 600px;
  border: 2px solid gray;
  position: relative;
  left: 50%;
  /* margin-left: -600px; */
  transform: translate(-50%);
  background-position: center;
  background-size: size;
  background-repeat: no-repeat;
  /* background: url(../images/pic-1.jpg); */
}

.container .arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  font-size: 28px;
  font-weight: 700;
}
.container .arrow:hover{
  cursor: pointer;
}

.container #left {
  left: 0;
}
.container #right {
  right: 0;
}




     <h1>a</h1>
    <h2>Carousel slide</h2>
      <div class="container">
        <div class="arrow" id="left">&lang;</div>
        <div class="arrow" id="right">&rang;</div>
      </div>**



// carusel img slide

{
  const container = document.querySelector('.container')
  
  // 이미지 배열
  const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg']

  container.style.backgroundImage = `url(./images/${pics[0]})`

  const arrows = document.querySelectorAll('.arrow')
  let i = 0;

  arrows.forEach((arrow)=>{
    arrow.addEventListener('click', (e)=> {
      if(e.target.id === "left") {
        i--;
      if(i < 0){
        i =pics.length - 1
      }
    }else if(e.target.id === "right") {
      i++;
      if(i>= pics.length) {
        i = 0
      }
    }
    container.style.backgroundImage =`url(./images/${pics[i]})`
    })
  })
}
```