
# SELECT 문제
```sql
-- 1. 모든 도서의 이름과 가격을 검색하시오.
select bookname , price
from book;

```

```sql
-- 2 모든 도서의 도서번호 도서이름 출판사 가격을 검색하시오

select bookid "도서번호" ,bookname "도서이름", publisher"출판사" , price "가격"
from book;

```

```sql
-- 3. 도서 테이블에 있는 모든 출판사를 검색하시오. (중복제거)
select  distinct publisher
from book;
```

```sql
-- 4. 가격이 20,000원 미만인 도서를 검색하시오.
select *
from book
where price < 20000;
```

```sql
-- 5. 가겨이 10,000원 이상 20000원 이하인 도서를 검색하시오.
select *
from book
where price between 10000 and 20000 ;
```

```sql
-- 6. 출판사가 '굿스포츠' 혹은 '대한미디어'인 도서를 검색하시오.
select *
from book
where publisher='굿스포츠' or publisher ="대한미디어";

select *
from book
where publisher in('굿스포츠' ,"대한미디어")


-- '굿스포츠','대한미디어'를 제외한 자료 검색

select *
from book
where publisher not in('굿스포츠' ,"대한미디어")
```

```sql
-- 7. 축구의 역사를 출간한 출판사를 검색하시오.
select bookname, publisher
from book
where bookname = '축구의 역사';
```

```sql
-- 8. 도서이름에 축구가 포함된 출판사를 검색하시오
select bookname, publisher
from book
where bookname like '%축구%';
```

```sql
-- 9. 도서이름의 왼쪽 두번째 자리에 '구'라는 문자열을 갖는 도서를 검색하시오.
select bookname, publisher
from book
where bookname like '_구%'
```

```sql
-- 10. 축구에 관한 도서 중 가격이 20000원 이상인 도서를 검색하시오.
select bookname, publisher
from book
where bookname like '%축구%' and price >= 20000;

```

```sql
-- 11. 도서를 이름 순으로 검색하시오.
select *
from book
order by bookname;

```

```sql
-- 12. 도서를 가격 순으로 검색하고 , 가격이 같으면 이름순으로 검색하시오.
select *
from book
order by price,bookname;
```

```sql
-- 13. 도서를 가격의 내림차순으로 검색하시오.
-- 만약 가격이 같다면, 출판사의 오름차순으로 검색하시오.
select *
from book
order by price desc, publisher asc;
```

```sql
select *
from orders;
desc orders; orders 테이블 확인

-- 14. 고객이 주문한 도서의 총 판매액을 구하시오.
select sum(saleprice) as "총 판매액"
from orders;
```

```sql
select *
from orders;
select*
from customer;


-- 15. 김연아 고객이 주문한 도서의 총 판매액을 구하시오.
select custid
from customer
where name = "김연아"# 결과 : 2

select saleprice
from orders
where custid=2;
```

```sql
-- 서브 쿼리
select sum(saleprice)
from orders
where custid=(select custid
			  from customer
              where name = '김연아');
```

```sql
-- 16. 고객이 주문한 도서의 총 판매액, 평균값, 최저가 , 최고가를 구하시오.
select
	sum(saleprice) as Total,
    avg(saleprice) as Average,
    min(saleprice) as  Minimum,
	max(saleprice) as  Maximum
from orders;
```

```sql
-- 17. 마당 서점의 도서 판매 건수를 구하시오.
select count(*)
from orders;
```

```sql
-- 18. 고객별로 주문한 도서의 총 수량과 총 판매액을 구하시오.
select custid, count(*) 도서수량, sum(saleprice) 총액
from orders
group by custid;
```


```sql
-- 19. 가격이 8천원 이상인 도서를 구매한 고객에 대하여 고객별 주문 도서의 총 수량을 구하시오.
-- 고객별 주문 도서의 총수량을 구하시오.
-- 단, 2권 이상의 구매한 고객만 구하시오.

select custid, count(*)
from orders
where  saleprice >=8000
group by custid
having count(*)>=2;
```