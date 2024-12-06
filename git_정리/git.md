# git 설치 방법

- 공유 폴더(데이터 저장소) , 웹사이트 페이지

```
- 환경설정 : git bash 설치
- local > github 등록한 이름 이름(username) -> 연결
  git bash => user name , user email
- project folder 진행


```
```
git bash 설치 
git bash 관리자 권한 실행

$ git config --global user.name"2gyusung"

$ git config --global user.email "leegs005@naver.com"

git config --list 확인할 때 사용한다

.gitignore 파일 생성 (파일 제외하고 올려주는 )
.cache
dist
node_modules 
.DS_Store


$ git init 초기화
$ git status 상태 확인
  git add . 모든 파일 포함 추가
$ git status 상태 확인
  git commit -m "parcel bundler project"
  git log
   git remote add origin https://github.com/2gyusung/parcel_template.git ***
   git remote -v [상태확인]
   git push origin master


  ❗ 금지 git branch -M main 

```
# 파일 재업로드
```
파일 재업로드

  git add . 모든 파일 포함 추가
  git commit -m "parcel bundler project"
  git log
  git push origin master
```
# 레파지토리 폴더 설치 
```
parcel bundler 설치
숨겨진 폴더 클릭후 git 설치
npm i 
```
# 원격 저장소 확인
```
git branch -a

git checkout view
```