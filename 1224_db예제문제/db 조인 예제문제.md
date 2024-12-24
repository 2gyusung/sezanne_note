```sql
select * 
from customer , orders; #50개

select count(*) 
from orders; #5개

select count(*) 
from customer; #10개


-- 1. 고객과 고객의 주문에 관한 데이터를 모두 보이시오.

select * 
from customer , orders
where customer.custid = orders.custid;

select *
from customer c
	inner join orders o
    on c.custid = o.custid;

```


```sql
  -- 2. 고객과 고객의 주문에 관한 데이터를 고객별로 정렬하여 보이시오.
select * 
from customer c , orders o
where c.custid = o.custid
order by c.custid;
```

```sql
-- 3. 고객의 이름과 고객이 주문한 도서의 판매가격을 검색하시오.
select * from book;
select * from customer;
select * from orders;

select c.name , o.saleprice
from customer c, orders o
where c.custid = o.orderid;

```

```sql

-- 4. 고객별로 주문한 모든 도서의 총 판매액을 구하고, 고객별로 정렬하시오.
select *
from book;
select *
from customer;

select c.name , sum(o.saleprice)
from customer c, orders o
group by c.name
order by c.name; 

-- 내림차순
select c.name , sum(o.saleprice)
from customer c, orders o
group by c.name
order by  sum(o.saleprice) desc;
```


```sql

-- 5. 고객의 이름과 고객이 주문한 도서의 이름을 구하시오.
select *
from customer;
select * from orders;
select * from books;

select c.name  ,b.bookname
from customer c, orders o , book b
where c.custid = o.custid and o.bookid= b.bookid


-- 6. 가격이 20,000원인 도서를 주문한 고객의 이름과 도서의 이름을 구하시오.

select c.name  ,b.bookname
from customer c, orders o , book b
where c.custid = o.custid and o.bookid= b.bookid and b.price = 20000;
```


```sql
-- 7. 도서를 구매하지 않은 고객을 포함하여 고객의 이름과 고객의 주문한 도서의 판매가격을 구하시오.


select c.name  ,o.saleprice
from customer c 
	left outer join  orders o
    on c.custid = o.custid;
```

```sql
-- 8.  가장 비싼 도서의 이름을 보이시오
select max(price)
from book ;

select bookname
from book 
where price = 35000;

select bookname
from book 
where price =(select max(price)
from book)

```

```sql
-- 9. 도서를 구매한 적이 있는 고객의 이름을 검색하시오.
select  distinct custid
from orders;

select name
from customer
where custid in (1,2,3,4);


select name
from customer
where custid in (select  distinct custid
				from orders)
```

```sql
-- 10. 대한미디어에서 주 출판한 도서를 구매한 고객의 이름을 보이시오.

# 1 = 출판사가 '대한미디어'인 bookid
select bookid
from book
where  publisher ="대한미디어"; # 결과 : 3,4

# 2 = 1에서 얻은 결과물을 토대로 custid
select custid
from orders
where bookid in (3,4); # 결과 1


# 3 = 2에서 얻은 결과물을 토대로 고객이름

select name
from customer
where custid in (1);

-- 부속질의 형태로 표현하면
select name
from customer
where custid in ( select custid
from orders
where bookid in (select bookid
from book
where  publisher ="대한미디어" ));
```


```sql
-- 11. 출판사별로 출판사의 평균도서 가격보다 비싼 도서를 구하시오.
select  b1.bookname
from book b1
where b1.price > (select avg(b2.price)
				from book b2
                where b2.publisher = b1.publisher);

select avg(price)
from book
group by publisher;
```