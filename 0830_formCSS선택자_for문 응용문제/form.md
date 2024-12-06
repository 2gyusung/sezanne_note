```html

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>form</title>
  <style>
    textarea {resize: none;}
  </style>
</head>
<body>
  <form action="#" method="post" enctype="multipart/form-data">
    <fieldset>
      <legend>type 속성</legend>
      <p>아이디 : <input type="text"></p>
      <p>비밀번호 : <input type="password"></p>
      <p>검색 : <input type="search"></p>
      <p>이메일 : <input type="email"></p>
      <p>이메일(다중) : <input type="email" multiple></p>
      <p>전화번호 : <input type="tel"></p>
      <p>웹사이트 : <input type="url"></p>
      <p>생년월일 : <input type="date"></p>
      <p>컬러 : <input type="color"></p>
      <p>수량 : <input type="number"></p>
      <p>수량 : <input type="number" min="1" max="10" value="1"></p>
      <p>만족도 : <input type="range"></p>
      <p>만족도 : <input type="range" min="1" max="10" value="10"></p>
      <p>수신여부 : 
        예 <input type="radio" name="receive" checked>
        아니오 <input type="radio" name="receive">
      </p>
      <p>취업분야 :
        웹디자인 <input type="checkbox"> /
        웹퍼블리셔 <input type="checkbox"> /
        웹프론트엔드개발자 <input type="checkbox" checked> /
        웹백엔드개발자  <input type="checkbox"> /
        풀스택개발자 <input type="checkbox">
      </p>
      <p>파일 첨부(1개) : <input type="file"></p>
      <p>파일 첨부(다중선택) : <input type="file" multiple></p>
      <p><input type="submit" value="전송"></p>
      <p><input type="reset" value="취소"></p>
      <p><input type="button" value="확인"></p>
      <p><input type="image" src="./images/btn_search.png" alt=""></p>
      <p><button>전송</button></p>
    </fieldset>
    <fieldset>
      <legend>회원가입</legend>
      <p>가입목적 :<br>
        <textarea cols="100" rows="5"></textarea>
      </p>
      <p>
        과목선택 : <select>
          <option>html5</option>
          <option>css3</option>
          <option>javascript</option>
          <option>jQuery</option>
        </select>
      </p>
      <p>
        과목선택(다중) : <select multiple>
          <option>html5</option>
          <option>css3</option>
          <option>javascript</option>
          <option>jQuery</option>
        </select>
      </p>
      <p>스터디 지역 
        <select>
          <optgroup label="중구">
            <option>선화동</option>
            <option>은행동</option>
          </optgroup>
          <optgroup label="서구">
            <option>탄방동</option>
            <option>둔산동</option>
          </optgroup>
        </select>
      </p>
    </fieldset>
    <fieldset>
      <legend>필드에 입력형식 힌트주기</legend>
      <ul>
        <li>
          <label for="phone">핸드폰 번호</label>
          <input type="tel" id="phone" placeholder="01011112222">
        </li>
        <li>
          <label for="email">이메일</label>
          <input type="email" id="email" placeholder="id@domain.com">
        </li>
      </ul>
    </fieldset>
    <!-- <fieldset>
      <legend>포커스 자동 이동/필드 유효성 검사</legend>
      <p><strong>*</strong>표시는 필수 입력 사항입니다.</p>
      <ul>
        <li><label for="name"><strong>*</strong>이름</label><input type="text" id="name" autofocus required></li>
        <li><label for="id"><strong>*</strong>아이디</label><input type="text" id="id" required></li>
        <li><label for="pw"><strong>*</strong>비밀번호</label><input type="password" id="pw" required></li>
        <li><label for="tel"><strong>*</strong>전화번호</label><input type="text" id="tel" required></li>
        <li><label for="email">이메일</label><input type="email" id="email"></li>
      </ul>
      <p><input type="submit" value="전송"></p>
    </fieldset> -->
    <fieldset>
      <legend>datalist</legend>
      <p>
        <label for="course">수강과목</label>
        <!-- list 속성 : 텍스트 필드에 내용 입력시 미리 만들어 놓은 리스트 항목이 마치 자동완성 기능처럼 나타나도록 하는 속성.
         리스트 항목들은 <datalist>요소로 만든다. -->
        <input type="text" id="course" list="subjects">
        <datalist id="subjects">
          <option value="html5">html5</option>
          <option value="css3">css3</option>
          <option value="javascript">javascript</option>
        </datalist>
      </p>
    </fieldset>
    <fieldset>
      <legend>정규식 속성</legend>
      <p><label for="tel">휴대폰 번호</label><input type="tel" id="tel" pattern="\d{3}-\d{3,4}-\d{4}" required title="휴대폰 번호는 숫자 3자리-숫자 3자리에서 4자리-숫자 4자리 입력"></p>
    </fieldset>
    <p><input type="submit" value="전송"></p>

    <fieldset>
      <legend>disabled 속성과 readonly 속성</legend>
      <ul>
        <li>
          <label for="serialNum">시리얼 번호 입력 : </label> 
          <input type="text" id="serialNum">
          <input type="button" value="이전">
          <input type="button" value="다음" disabled>
        </li>
        <li>
          <label for="book">선택한 책 : </label>
          <input type="text" id="book" value="반응형 웹" readonly>
          <label for="number">수량 : </label>
          <input type="number" id="number" value="1">
        </li>
      </ul>
    </fieldset>
  </form>
</body>
</html>
```