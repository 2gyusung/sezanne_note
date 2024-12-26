```sql
CREATE PROCEDURE ifProc2()
BEGIN
/*
if(조건식) {
실행문
}
if 조건식 then
	SQL문장;
end if

------------------

if(조건식) {
실행문
} else {
실행문2;
}
if 조건식 then
	SQL문장1;
else
	SQL문장2;
end if
*/
END
```

```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `ifProc2`()
BEGIN
/*
if(조건식) {
실행문
}
if 조건식 then
	SQL문장;
end if

------------------

if(조건식) {
실행문
} else {
실행문2;
}
if 조건식 then
	SQL문장1;
else
	SQL문장2;
end if
*/
declare myNum int; -- 선언
set myNum = 200; -- 할당(대입)
if myNum = 100 then
	select '100입니다';
else
	select '100이 아닙니다';
end if;
END
```

```sql

/*
2002년 월드컵
2024 현재
(2002년-2024)현재로 부터 몇년 지남
*/
select current_date(); -- 오늘 날짜
select current_timestamp(); -- 오늘 날짜 및 시간
select datediff('2002-01-01','2024-12-26');

select datediff(current_date(), '2025-02-25'); -- 날짜차이 , 일수
```

```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `ifProc3`()
BEGIN
	declare debutDate Date; -- 데뷔 일자
    declare curDate Date;  -- 오늘
    declare days int;   -- 활동한 일수

select debut_date into debutDate
from market_db.member
where mem_id='APN';

set curDate = current_date();
set days = dated(curdate(), debutDate);

if(days/365) >= 5 then
	select concat('데뷔한 지', days, '일이나 지났습니다. 핑순이들 축하합니다.');
else
	select '데뷔한 지' + days +'일 밖에 안되었네요 핑순이들 화이팅!';
END if;
end
```

```sql
CREATE PROCEDURE caseProc ()
BEGIN
	declare point Int;
    declare credit char(1);
    set point =88;

    case
		when point >= 90 then
			set credit = 'A';
		when point >= 80 then
			set credit = 'B';
		when point >= 70 then
			set credit = 'C';
		when point >= 60 then
			set credit = 'D';
		else
			set credit = 'F';
		end case;
        select concat('취득점수==>',point), concat('학점==>', credit);
END


call caseProc();
```

```sql
-- 회원별로 총구매액
select b.mem_id,m.mem_name, sum(b.price*b.amount) '총 구매액'
from buy b
		inner join member m
        on b.mem_id = m.mem_id
group by b.mem_id
order by sum(b.price*b.amount) desc;

-- 회원 등급 표시(구매 이력이 있는 회원)
select b.mem_id,m.mem_name, sum(b.price*b.amount) '총 구매액',
case
	when sum(b.price*b.amount) >= 1500 then '최우수고객'
    when sum(b.price*b.amount) >= 1000 then '우수고객'
     when sum(b.price*b.amount) >= 1 then '일반고객'
    else '일반 고객'
    end '회원등급'
from buy b
		inner join member m
        on b.mem_id = m.mem_id
group by b.mem_id
order by sum(b.price*b.amount) desc;
```

```sql
-- 회원 등급 표시(전체 회원)
select m.mem_id,m.mem_name, sum(b.price*b.amount) '총 구매액',
case
	when sum(b.price*b.amount) >= 1500 then '최우수고객'
    when sum(b.price*b.amount) >= 1000 then '우수고객'
     when sum(b.price*b.amount) >= 1 then '일반고객'
    else '일반 고객'
    end '회원등급'
from buy b
		right outer join member m
        on b.mem_id = m.mem_id
group by m.mem_id
order by sum(b.price*b.amount) desc;
```

```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `whileProc`()
BEGIN
	declare i int;
    declare hap int;
    set i = 1;
    set hap = 0;
    
    while (i<= 100) DO
    set hap = hap + i;
    end while;
    select '1부터 100까지의 합 ==>', hap;
END
```

```sql
/* break(=leave)
	continue(=iterate)
*/ 

call whileProc2();

CREATE DEFINER=`root`@`localhost` PROCEDURE `whileProc2`()
BEGIN
declare i int;
declare hap int;
set i = 1;
set hap = 0;

myWhile:
while (i<=100) do
if(i%4=0) then
set i = i+1;
iterate myWhile;
end if;
set hap = hap + i;
if(hap > 1000) then
leave myWhile;
end if;
set i = i+1;
end while;
select '1부터 100까지의 합(4의 배수 제외), 1000 넘으면 종료 ===>', hap;
END
```

```sql
prepare myQuery from 'select * from member where mem_id="blk"';
execute myQuery;
deallocate prepare myQuery;
```