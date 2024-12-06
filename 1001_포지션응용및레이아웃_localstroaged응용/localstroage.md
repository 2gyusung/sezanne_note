# localStroage 객체

> 웹 브라우저에서 기본적으로 제공되어지는 객체

- 한글은 2바이트 영문, 숫자, 특문은 1바이트
- localStroage 반영구적 데이터 보관, sessionStroage 한시적 데이터 보관

```javascript
// localStorage.getItem(key) // 가져 오는 것
// localStorage.setItem(key , value) // 가져놓는 것
// localStorage.removeItem(key) // 하나만 삭제
// localStorage.clear()// 전체 삭제
{
  const pEl = document.querySelector(".container p");
  const input = document.querySelector(".container input");
  const button = document.querySelector(".container button");

  console.log(pEl, input, button);

  const savedValue = localStorage.getItem("input");
  console.log(savedValue);

  if (savedValue) {
    //false 값
    input.value = savedValue;
    pEl.textContent = "이전 실행 때의 마지막 값 : " + savedValue;
  }
  input.addEventListener("change", (e) => {
    const value = e.currentTarget.value;
    localStorage.setItem("input", value);
  });
}
```
# 응용  localStroage
```javascript
{
  const obj = {
    familName: "Hong",
    lastName: "Gildong",
  };
  console.log(obj);
  console.log(JSON.stringify(obj, null, 2));
  const convertData = JSON.stringify(obj, null, 2); // 일반 객체 JSON Data(문자열 데이타) 변환
  console.log(convertData);
  console.log(JSON.parse(convertData)); //JSON.parse(convertData) : JSON Data에서 객체로 변환해서 준다

  const array = ["Home", "About", "Products"];
  const pEl = document.querySelector(".container p");
  const input = document.querySelector(".container input");
  const button = document.querySelector(".container button");

  console.log(pEl, input, button);

  const savedValue = localStorage.getItem("input");
  console.log(savedValue);

  if (savedValue) { //false 값을 안 받기 위해서 if 사용
    input.value = savedValue;
    pEl.textContent = "이전 실행 때의 마지막 값 : " + savedValue;
  }
  input.addEventListener("change", (e) => {
    const value = e.currentTarget.value;
    localStorage.setItem("input", value);
    localStorage.setItem("arr", JSON.stringify(array)); //배열로 들어감
  });
  button.onclick = () => {
    localStorage.removeItem("input");
  };

  console.log(localStorage.getItem("arr")); // 문자로 들어옴
  console.log(JSON.parse(localStorage.getItem("arr"))); // 배열로 들어옴
  localStorage.setItem("obj", JSON.stringify('obj'));
  console.log(localStorage.getItem("obj"));
  console.log(JSON.parse(localStorage.getItem("obj")));
  // sessionStorage.setItem('name', 'HongGilldong');

   // localStorage.clear()
}
```

# test_page.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test Page</title>
    <script>
      // console.log(localStorage.getItem('arr')); // 배열이 아닌 문자로 가져온다 ["Home","About","Products"]

      console.log(JSON.parse(localStorage.getItem("arr")));
      console.log(sessionStorage.getItem("name"));
    </script>
  </head>
  <body>
    <h1>Test Page!!</h1>
  </body>
</html>
```
