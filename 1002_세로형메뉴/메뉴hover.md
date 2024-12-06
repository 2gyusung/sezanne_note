```css
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: "Pretendard-Regular";
  padding: 0;
  margin: 0;
}
.inner {
  width: 1100px;
  margin: 0 auto;
  outline: 1px solid blue;
}

/* h1 {
  color: orange;
  /*  
  font-size: 2rem;
  font-weight: 700;
  /* text-indent: -9999px; /*h1 가리기 위해서(판독기에서는 읽혀진다)*/
.header .inner {
  overflow: hidden;
}
.header {
  background-color: antiquewhite;
}
.header h1 {
  width: 200px;
  padding: 20px 0;
  text-align: center;
  float: left;
}
.header .nav {
  width: 900px;
  float: left;
}
.header .nav .gnb .menu {
  width: 200px;
  height: 50px;
  font-size: 32px;
  font-weight: 700;
}
.header .nav .gnb li .bg_box {
  width: 100%;
  height: 100px;
  background-color: aqua;
  position: fixed;
  left: 0;
  top: 50px;
  display: none;
}
.header .nav .gnb li .submenu {
  position: fixed;
  display: none;
}
.header .nav .gnb li:hover .bg_box,
.header .nav .gnb li:hover .submenu {
  display: block;
}
.nav .gnb li .submenu {
  /* display: none; */
}
.header .nav .gnb li ul {
  float: left;
  width: 200px;
}

```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Middle Javascript</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css"
    />
    <!-- reset css cdn-->
    <link rel="stylesheet" href="./css/main.css" />
    <script defer src="./js/custom.js"></script>
  </head>
  <body>
    <div class="header">
      <div class="inner">
        <h1>LOGO</h1>
        <div class="nav">
          <ul class="gnb">
            <li>
              <div class="bg_box"></div>
              <div class="menu">Coffee</div>
              <div class="submenu">
                <div class="sub_group">
                  <ul>
                    <li><a href="#">submenu1-1</a></li>
                    <li><a href="#">submenu1-2</a></li>
                    <li><a href="#">submenu1-3</a></li>
                    <li><a href="#">submenu1-4</a></li>
                  </ul>
                  <ul>
                    <li><a href="#">submenu1-1</a></li>
                    <li><a href="#">submenu1-2</a></li>
                    <li><a href="#">submenu1-3</a></li>
                    <li><a href="#">submenu1-4</a></li>
                  </ul>
                </div>
                <div class="texture">
                  <h1>Hi</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae autem recusandae ab eveniet iste. Ea quis
                    reprehenderit quod, velit, ullam, amet voluptatum minima
                    eius maxime odio modi nam adipisci esse?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>
```
