```sql
-- update문의 기본 문법

 /*update TBL명
	set 열=1값=1 , 열=2값=2...
    where 조건;*/

desc world.city;

select name
from world.city
where name="seoul"
order by name;

select *
from city_popul
where city_name='seoul';

update city_popul
	set city_name =  '서울'
	where city_name='seoul';

select *
from city_popul
where city_name = '서울';    
```

```sql

-- Newyork  => 뉴욕 한글로 변경 , population : 0
select *
from city_popul
where city_name='New york'; -- 조회

update city_popul
	set city_name =  '뉴욕' ,population = 0 -- 변경
	where city_name='New york';
    
    select *
	from city_popul
	where city_name='뉴욕';
```

```sql
  update city_popul
    set population = population/10000;
    
    select * 
    from city_popul
    limit 5;
    
       select city_name 도시, population '인구수(단위:만명)'
    from city_popul
    order by population desc -- 높은순
    limit 10;

```

```sql
-- delete문의 기본 문법

-- delete from 테이블명 where 조건
-- new로 시작하는 도시 검색

select count(*)
from city_popul
where city_name like 'new%';


-- new로 시작하는 도서 상위 5건 삭제
delete from city_popul 
where city_name like 'new%'
limit 5;

select count(*) --조회
from city_popul
where city_name like 'new%';

-- 삭제 : drop(테이블 자체 삭제) , delete(조건 포함, 데이터만 삭제) , truncate(데이터만 삭제) p.151 참조

delete from big_tbl1;
drop table big_tbl2;
truncate table big_tb3;
```