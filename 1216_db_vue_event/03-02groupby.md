
- 경로 접속 후 아이디 패스워드 입력
```sql
C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -uroot -p0000
```

- 해당 폴더 경로 확인
```sql
mysql> show databases;
```
- 생성
```sql
mysql>create database webClass_db;
```
- 선택
```sql
mysql> use webClass_db
```

- 테이블
```sql
mysql> show tables;
```

- 테이블 확인
```sql
mysql> desc student;
```

#  limt 3명만 출력 ,   debut_date 내림차순

```sql
select mem_name, mem_number, debut_date
from member
where mem_number>=5
order by debut_date desc
limit 3;

```

# 중복 제거
```sql
select distinct addr
from member
order by addr;
```
# group by : 그룹으로 묶어주는 역할

```sql
select mem_id "회원 아이디", sum(amount) "총 구매 개수"
from buy
group by mem_id;
```

# 집계함수
```sql
select mem_id "회원 아이디", sum(amount) "총 구매 개수"
from buy
group by mem_id;

 select mem_id "회원 아이디", sum(price*amount) "총 구매 금액"
 from buy
 order by mem_id;
 
-- 전체 회원이 구매한 물품 개수의 평균
select avg(amount) "평균구매개수"
from buy
group by mem_id;

select count(*) "전체 회원 수"
from member;

select *
from member;

-- 연락처가 있는 회원 수
select count(phone1) "연락처가 있는 회원"
from member;
```