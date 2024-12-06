# slice 예제

```javascript
{
  const container = document.querySelector(".container");
  const paragraph = container.querySelector("p");
  const btn = container.querySelector("button");

  const text = paragraph.textContent.slice(0, 50); //0번째 부터 50번 배열까지 제외하고 삭제

  btn.addEventListener("click", () => {
    paragraph.textContent = text + "...";
    paragraph.style.textDecoration = "underline";
    console.log("is button click event");
  });
}
```
