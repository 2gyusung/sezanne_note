// import _ from 'lodash';  // _ : alias(별칭) , lodash : 모듈

// console.log('Hello');
// console.log(_.camelCase('web class!!')); //데이터 중복값 제거

// const btn = document.querySelector('button');
// console.log(btn);

// // 화면의 h1 요소에 클래스명 active 추가하여 css를 적용하도록 하자.
// // 단 버튼을 클릭하면..
// const h1El = document.querySelector('h1');
// console.log(h1El);

// // 사용자로부터 화면에 이름을 입력 받아서
// // 출력하는 프로그램 완성하시오.
// btn.addEventListener('click', function(){
//     h1El.classList.toggle('active')
// })

// console.log('Hello');
// const h1El = document.querySelector('h1')
// console.log(h1El);

document.addEventListener('DOMContentLoaded', function(){
    // console.log('Hello');
    const h1El = document.querySelector('h1')
    console.log(h1El);
    h1El.style.color = 'orange';

})

// const nickName = prompt('당신의 이름은>');

// console.log(nickName)

// const num1 = prompt('당신은 좋아하는 처음 숫자는?' , 0);
// const num2 = prompt('당신은 좋아하는 두 번째 숫자는?' , 0);
// console.log(num1 + num2);


// const userName = prompt('you Name?')
// alert(userName + '님 반갑습니다!')

document.write('hello');
document.write('<h2 style="color:red;">Hello javascript');


let result = confirm('탈퇴하시겠습니까?')
console.log(result);

// let userName2 = prompt('당신의 이름은?')
// console.log(userName2);

if(result) {
    console.log('회원탈퇴가 완료 되었습니다!');
    
}
else {
    console.log('회원탈퇴가 취소 되었습니다!');
    
}