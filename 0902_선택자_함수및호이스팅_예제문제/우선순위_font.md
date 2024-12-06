# 선택자 우선순위 
```
* 전체 선택자(*) 0
* type 선택자(p , h1 ...) 1
* 가상 선택자(:first-child) 10 
* class 선택자(.abc , ...) 10
* id 선택자 (#abc, ...) 100

type 선택자 < class 선택자 , 가상 선택자 < id선택자  < inline style < !important
```
  # 문자 관련 스타일
```
    font-family 글꼴
    font-size 글자 크기
    font-weight 글자 굵기
    font-style 기울임 여부
    font-variant 대소문자 여부
    line-height 줄 간격
    color 글자 색상 
    font : [font-weight , font-style , font-variant][*font-size/line-height][*font-family] 
    *글자 크기와 글꼴은 결코 생략 불가능*
```