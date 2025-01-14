         // ------------------------------------------ 리펙토링 ----------------------------------------------------
     // 자주수정할 수 있는 정보값들을 상단에 전역 변수로 설정
      const frame ='section';
      const box ='article';
      const speed ='0.5s';
      const activeClass ='on';
      const btn = document.querySelectorAll('main ul li')
      let grid; // 플러그인의 정보값이 담길 변수를 이곳에 전역으로 설정
      
      window.addEventListener("load", () => {
        init(); //화면 초기화 함수 호출
        filter(btn); //정렬 버튼 기능의 함수 호출
      });
      // 화면 초기화 함수 정의
      function init() {
        //변수에 grid에 담길 결과값이 다른 함수인 filter에서도 활용 하므로 전역변수로 선언
          grid = new Isotope(frame, {
          // 배치할 요소를 감싸고 있는 부모 요소명
          itemSelector: box, // 배치할 요소명
          columnWidth: box, //너빗값을 구할 요소명
          transitiDuration: speed //화면 재배치 시 요소가 움직이는 속도
        });
      }
        function filter(arr){
          for(let el of arr){
            el.addEventListener('click', e=> {
              e.preventDefault();

            // 변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 지정
            const sort = e.currentTarget.querySelector("a").getAttribute("href")
            // grid에 저장된 결과값을 불러와 재정렬 기능

            grid.arrange({
              // 옵션값으로 sort 변수값 지정
              filter : sort
            })

              // 다시 모든 버튼의 개수만큼 반복해서 
              for(let el of arr) {
                // 각 버튼의 클래스명 'on'을 제거해 비활성화
                el.classList.remove(activeClass);
              }
              //  클릭한 대상만 선택해서 클래스 명 on을 추가해 활성화
              e.currentTarget.classList.add(activeClass)
          })
            }
            
          }
     
      
  

      // ------------------------------------------

      // // 페이지로드 이벤트
      // window.addEventListener("load", () => {
      //   const grid = new Isotope("section", {
      //     // 배치할 요소를 감싸고 있는 부모 요소명
      //     itemSelector: "article", // 배치할 요소명
      //     columnWidth: "article", //너빗값을 구할 요소명
      //     transitiDuration: ".5s", //화면 재배치 시 요소가 움직이는 속도
          
      //   });
      //   // 버튼 클릭 시 홀,짝,전체 레이아웃 맞게 나오게 하는 기능[클릭한 모든 버튼 변수에 저장]
      //   const btns = document.querySelectorAll('main ul li')
      //   // 각 버튼의 개수만큼 반복해서 
      //   for(let el of btns) {
      //     // 각 버튼에 클릭 이벤트를 연결
      //     el.addEventListener('click', (e)=> {
      //         e.preventDefault();

      //       // 변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 지정
      //       const sort = e.currentTarget.querySelector("a").getAttribute("href")
      //       // grid에 저장된 결과값을 불러와 재정렬 기능
      //       grid.arrange({
      //         // 옵션값으로 sort 변수값 지정
      //         filter : sortv 
      //       })

      //         // 다시 모든 버튼의 개수만큼 반복해서 
      //         for(let el of btns) {
      //           // 각 버튼의 클래스명 'on'을 제거해 비활성화
      //           el.classList.remove("on");
      //         }
      //         //  클릭한 대상만 선택해서 클래스 명 on을 추가해 활성화
      //         e.currentTarget.classList.add("on")
      //     })
      //   }

      // });