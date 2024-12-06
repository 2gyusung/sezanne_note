# 일반 css

```css
html {
  --fontColor-base: orange;
}

h1 {
  color: var(--fontColor-base);
}
.container {
  border: 2px solid var(--fontColor-base);
  padding: 30px;
}
h2 {
  color: royalblue;
}
```

# scss

```css
$fontColor-base: orange;

h1 {
  color: $fontColor-base;
}
.container {
  border: 2px solid $fontColor-base;
  padding: 30px;
  h2 {
    color: royalblue;
  }
}
```

# 1 SCSS npm 설치 후

```
npm i -D sass sass-loader
```

# 2 package.json sass ,sass-loader 확인

```javascript
{
  "name": "sass_scss",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@parcel/transformer-sass": "^2.13.2",
    "parcel": "^2.13.2",
    "sass": "^1.82.0",
    "sass-loader": "^16.0.3"
  }
}

```

# 3 index.574c7455.css 확인

```css
h1 {
  color: orange;
}

.container {
  border: 2px solid orange;
  padding: 30px;
}

.container h2 {
  color: #4169e1;
}
/*# sourceMappingURL=index.574c7455.css.map */
```

# 주석 SCSS 자료 사이트

```

https://www.biew.co.kr/entry/Sass%E3%86%8DSCSS-SASS-%EB%AC%B8%EB%B2%95-mixin%EB%AF%B9%EC%8A%A4%EC%9D%B8-extend%ED%99%95%EC%9E%A5
```

# Playground SCSS 자료 사이트

```
https://sass-lang.com/playground/#eJxVj8EKwjAMhu99ijCnTNjEuVt30ZuvEbuoxbqOpg6G+O62RWQ7Bf4/Xz5S18cXE2SMzNJo9lkrZomyxroQifxqe1+xR/WQcCYzktcKSzg5jaYV+eD0E91UJUDCqmmaQF1sN8FbACzwqNnhMFDfFbOiBMaeKyanr9s2QLGSc7QVHyEwHfx5lt5gBNjIux3JxaX/Who7VmioWCIl5Ebf7r6n8C0c9utk/kTRsaPL67bwfwHIyWEG
```

- 상위(부모) 선택자 참조
- 상위 선택자의 기호 & 기준으로 부모 요소를 참조

```scss
// 상위(부모) 선택자 참조
// 상위 선택자의 기호 & 기준으로 부모 요소를 참조

.container {
  .btn {
    padding: 10px 20px;
    border: 1px solid gray;
    &.active {
      color: orange;
    }
  }
  .fs {
    border: 2px solid royalblue;
    &-small {
      font-size: 12px;
      color: lightgray;
    }
    &-medium {
      font-size: 16px;
      color: lawngreen;
    }
    &-large {
      font-size: 20px;
      color: lightcoral;
    }
  }
  // 중첩된 속성 사용
  ul li {
    font: {
      weight: bold;
      size: 50px;
      font-family: sans-serif;
    }
    border: {
      style: dotted;
      size: 2px;
      color: red;
    }
  }
}
```

# 변수 scss

```scss
// 변수
$size: 100px;

.container {
  .box {
    position: fixed;
    top: $size;
    outline: 1px solid gray;
    .item {
      $size: 400px; //지역변수
      width: $size;
      height: 100px;
      transform: translate(100px);
      background-color: aqua;
    }
  }
}
```

# scss 계산

```scss
div {
  width: 20px + 20px;
  height: 40px - 20px;
  font-size: 30px * 2;
  margin: (30px / 2);
  padding: 20px % 7;
}
// css 변환
div {
  width: 40px;
  height: 20px;
  font-size: 60px;
  margin: 15px;
  padding: 6px;
}
```

# 재활용(mixin)

```scss
// 재활용(mixin)
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  .box {
    width: 200px;
    height: 200px;
    background-color: orange;
    @include center();
    .item {
      width: 100px;
      height: 100px;
      background-color: royalblue;
      @include center();
    }
  }
}
```

# 매개변수 추가하여 처리

```scss
// 매개변수를 추가하여 처리
@mixin box($size) {
  width: $size;
  height: $size;
  background-color: orange;
}
.container {
  .box {
    @include box(200px);
    @include center();
    .item {
      @include box(100px);
      background-color: royalblue;
      color: #fff;
      @include center();
    }
  }
}

// 매개변수를 추가하여 처리
@mixin box($size: 100px) {
  // 매개변수가 안 들어오면  $size : 100px 값으로 대체하겠다라는 의미
  width: $size;
  height: $size;
  background-color: orange;
}
.container {
  .box {
    @include box(200px);
    @include center();
    .item {
      @include box();
      background-color: royalblue;
      color: #fff;
      @include center();
    }
  }
}

// 매개변수를 추가하여 처리
// 2 기본매개변수로 처리
// 3 여러개의 매개변수 처리
@mixin box($size: 100px, $color: orange) {
  width: $size;
  height: $size;
  background-color: $color;
}
.container {
  .box {
    @include box(200px);
    @include center();
    .item {
      @include box(100px, red);
      color: #fff;
      @include center();
    }
  }
}
```

# 반복문

```scss
// 반복문
// 보간법을 사용하는데 #을 사용
// 문법은 조금 틀리다.
@mixin box($size: 200px, $color: orange) {
  width: $size;
  height: $size;
  background-color: $color;
}
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  .box {
    @include center;
    @include box(200px);
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
    @for $i from 1 through 10 {
      .item:nth-child(#{$i}) {
        //nth-child 숫자만 가능하다
        @include center;
        @include box(100px, royalblue);
        color: #fff;
        width: 100px * $i;
      }
    }
  }
}
```

# 함수

```scss
// 함수
// @mixin 재활용 , 함수는 재활용의 개념이 아니고 어떤 값을 연산하여 반환된 결과로 사용
@use "sass:math";

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@function ratio($size, $ratio) {
  @return $size * $ratio;
}

.container {
  .box {
    .item {
      $width: 500px;
      width: $width;
      // height: ratio($width, 1/2);
      // height: ratio($width, math.div(1,2));
      height: ratio($width, math.div(9, 16));
      background-color: orange;
      @include center();
    }
  }
}
```

# 색상 내장 함수

```scss
// 색상 내장 함수
// scss 내부에 구현되어있는 별도로 선언하지 않고
// 언제든지 사용할 수 있는 함수

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  $color: royalblue;
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 20px;
  background-color: $color;
  &.built-in {
    // background-color: mix($color, red);
    // background-color: lighten($color, 10%);
    &:hover {
      // background-color: darken($color, 10%);
      // background-color: saturate($color, 10%);
      // background-color: desaturate($color, 10%);
      // background-color: grayscale($color);
      // background-color: invert($color);
      background-color: rgba($color, 0.5);
      color: #fff;
    }
    // background-color: darken($color, 10%);
    @include center();
  }
}
```

# 가져오기

```scss
// 가져오기
// css에 import 속성
// @import url(./body.scss);
// scss
@import "./body.scss" @import "./body.scss", "./underline.scss";
```

#

```scss
// 데이터 종류
//  숫자데이터 , 문자 , 색상 , 블린, 널데이터 등
/ 반복문 @each
// 데이터와 관련한 반복문

$number : 1;
$string: bold;
$color: royalblue;
$boolean: true;
$null: null;f
$list: orange, royalblue, burlywood;
$map: (
    o: orange,
    r: royalblue,
    b: burlywood,
  )

  .box {
  @each $c in $list {
    &.built-in {
      color: $c;
    }
  }
  @each $key, $value in $map {
    &.built-in-#{$value} {
      color: $value;
    }
  }
}
```
#  mixin 구조를 작성한 후에 적용 반복문 , map
```scss
// 재활용 @content
// mixin 구조를 작성한 후에 적용

@mixin left-top {
  position: absolute;
  top: 0;
  left: 0;
@content
}
.left-box {
  width: 300px;
  height: 300px;
  background-color: orange;
  .box {
    width: 200px;
    height: 200px;
    background-color: brown;
    @include left-top {
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }
}

@each $value in $list {
  &.built-in-#{$value} {
    color: $value;
  }
}
```

# if 
```scss
$color : orange;
@if($color == red) {
  font-size: 12px;
} @else if ($color == orange) {
 font-size: 70px;
}
@else {
  color #fff;
}

```