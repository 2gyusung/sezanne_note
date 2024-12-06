# 반응형 메뉴 토글 코드
```javascript

const btn = document.querySelector('button')
const nav = document.querySelector('nav')
console.log(btn , nav);

btn.addEventListener('click', ()=> {
  btn.classList.toggle('active')
  nav.classList.toggle('active')
})
button{
  display: none;
  position: fixed;
  top: 20px;
  right: 0;
  background-color: #639;
  padding: 15px;
  border:1px solid #fff;
  color: #fff;
  z-index: 1;
  transition: transform .3s ease-in-out;
}
button.active {
  transform: translateX(-105px);
}
.header {
  overflow: hidden;
}
.header ul li {
  padding: .5em;
  float: left;
}
nav {
  display: none;
  position: fixed;
  top: 0px;
  right: 0;
  background-color: #639;
  height: 100vh;
  padding: 6em 2em 2em;
  transform: translateX(100%);
  transition: transform .3s ease-in-out;
}
nav.active {
  transform: translateX(0);
}
nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
nav ul li {
  padding: 1em;
}
nav ul li a {
  color: #fff;
  text-decoration: none;
}
@media screen and (max-width : 760px) {
  /* .header {
    display: none;
  } */
  button {
    display: block;

  }

}
@media screen and (max-width : 480px) {
  .header {
    display: none;
  }
  button {
    display: block;

  }

}

  <body>
    <h1>Middle Javascript</h1>
    <button id="btn">&#9776</button>
    <div class="header">
      <ul>
        <li><a href="#">Javascript</a></li>
        <li><a href="#">TypeScript</a></li>
        <li><a href="#">Node.Js</a></li>
        <li><a href="#">FrameWork</a></li>
      </ul>
    </div>
    <nav id="nav">
      <ul>
        <li><a href="#">Javascript</a></li>
        <li><a href="#">TypeScript</a></li>
        <li><a href="#">Node.Js</a></li>
        <li><a href="#">FrameWork</a></li>
      </ul>
    </nav>
  </body>
```
