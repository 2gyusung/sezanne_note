```
DB 생성 -> 테이블 생성 -> 데이터 입력/수정/삭제 -> 데이터 조회/활용
```
# 입력해서 추가하기
```
```sql
create database web38_db;

drop database web38_db;

show database;

create table 테이블명 (
  column명1 데이터형식(자리수) not null primary key,
  column명1 데이터형식(자리수) not null
  column명1 데이터형식(자리수)  null
)
drop table
```
# 입력해서 추가하기
```
```sql
use shop_db;

create table product(
	product_name char(4) not null primary key,
    cost int not null,
    make_date date,
    company char(5),
    amount int not null
);


```
# 입력해서 추가하기
```sql
use shop_db;

create table product(
	product_name char(4) not null primary key,
    cost int not null,
    make_date date,
    company char(5),
    amount int not null
);

select * from product;

insert into product values ('바나나', 1500,'2021-07-01','델몬트', 17);
insert into product values ('카스', 1500,'2021-08-10','OB', 3);
insert into product values ('삼각김밥', 800,'2021-07-02','GS', 100);
```