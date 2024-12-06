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

#  2 package.json sass ,sass-loader 확인
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
    font:  {
      weight : bold;
      size : 50px;
      font-family: sans-serif;
    };
    border:  {
      style :dotted;
      size: 2px;
      color : red;
    };
  }
}


```
# 변수 scss
```scss

// 변수
$size :100px;

.container {
  .box {
    position: fixed;
    top: $size;
    outline: 1px solid gray;
    .item {
      $size : 400px; //지역변수
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
  width: 20px  + 20px;
  height: 40px -  20px;
  font-size: 30px * 2;
  margin: (30px / 2);
  padding: 20px % 7
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
@mixin box( $size ) {
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
@mixin box( $size : 100px ) { // 매개변수가 안 들어오면  $size : 100px 값으로 대체하겠다라는 의미
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
@mixin box( $size : 100px ,$color : orange ) {
  width: $size;
  height: $size;
  background-color: $color;
}
.container {
  .box {
    @include box(200px);
    @include center();
    .item {
      @include box(100px ,red);
      color: #fff;
      @include center();
    }
  }
}
```