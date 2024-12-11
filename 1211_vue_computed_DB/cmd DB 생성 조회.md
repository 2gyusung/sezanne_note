
# 리스트 확인
```sql
C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -uroot -p0000

mysql> use shop_db
Database changed
mysql> show tables;
+-------------------+
| Tables_in_shop_db |
+-------------------
| member            |
| product           |
+-------------------+
2 rows in set (0.01 sec)

mysql> desc member;  //구조확인
+-------------+----------+------+-----+---------+-------+
| Field       | Type     | Null | Key | Default | Extra |
+-------------+----------+------+-----+---------+-------+
| member_id   | char(8)  | NO   | PRI | NULL    |       |
| member_name | char(5)  | NO   |     | NULL    |       |
| member_addr | char(20) | YES  |     | NULL    |       |
+-------------+----------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> select * from member; 테이블 출력
+-----------+-------------+--------------------+
| member_id | member_name | member_addr        |
+-----------+-------------+--------------------+
| hero      | 임영웅      | 서울 은평구 증산동 |
| iyou      | 아이유      | 인천 남구 주안동   |
| jyp       | 박진영      | 경기 고양시 장항동 |
| tess      | 나훈아      | 경기 부천시 중동   |
+-----------+-------------+--------------------+
4 rows in set (0.00 sec)

mysql>

```
# 접속후 생성
```sql
C:\Program Files\MySQL\MySQL Server 8.0\bin>mysql -uroot -p0000 접속

create database test_db; 생성

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sakila             |
| shop_db            |
| sys                |
| test_db            |
| world              |
+--------------------+
8 rows in set (0.00 sec)



mysql> use test_db 선택
Database changed
mysql>show tables; 테이블 목록확인



mysql> create table member(
    -> member_id char(8) not null primary key,
    -> member_name char(5) not null,
    -> member_addr char(20) null
    -> );
Query OK, 0 rows affected (0.03 sec)



mysql> show tables; //목록확인
+-------------------+
| Tables_in_test_db |
+-------------------+
| member            |
+-------------------+
1 row in set (0.00 sec)



mysql> desc member; //구조확인
+-------------+----------+------+-----+---------+-------+
| Field       | Type     | Null | Key | Default | Extra |
+-------------+----------+------+-----+---------+-------+
| member_id   | char(8)  | NO   | PRI | NULL    |       |
| member_name | char(5)  | NO   |     | NULL    |       |
| member_addr | char(20) | YES  |     | NULL    |       |
+-------------+----------+------+-----+---------+-------+
3 rows in set (0.00 sec)



* 데이터 입력
mysql> insert into member values ("tess","나훈아","경기 부천시 중동");
Query OK, 1 row affected (0.01 sec)

mysql> insert into member values ('hero','임영웅','서울 은평구 증산동');
Query OK, 1 row affected (0.00 sec)

mysql> insert into member values ('iyou','아이유','인천 남구 주안동');
Query OK, 1 row affected (0.01 sec)

mysql> insert into member values ('jyp','박진영','경기 고양시 장한동');
Query OK, 1 row affected (0.01 sec)



mysql> select * from member;  테이블 출력
+-----------+-------------+--------------------+
| member_id | member_name | member_addr        |
+-----------+-------------+--------------------+
| hero      | 임영웅      | 서울 은평구 증산동 |
| iyou      | 아이유      | 인천 남구 주안동   |
| jyp       | 박진영      | 경기 고양시 장한동 |
| tess      | 나훈아      | 경기 부천시 중동   |
+-----------+-------------+--------------------+
4 rows in set (0.00 sec)


mysql> select * from member where member_name='아이유'; : 데이터 조회
+-----------+-------------+------------------+
| member_id | member_name | member_addr      |
+-----------+-------------+------------------+
| iyou      | 아이유      | 인천 남구 주안동 |
+-----------+-------------+------------------+
1 row in set (0.00 sec)

mysql> select * from member where member_name='임영웅';
+-----------+-------------+--------------------+
| member_id | member_name | member_addr        |
+-----------+-------------+--------------------+
| hero      | 임영웅      | 서울 은평구 증산동 |
+-----------+-------------+--------------------+
1 row in set (0.00 sec)


mysql> exit
Bye

```
# workbench
```sql
select *
from member;

select * 
from member 
where member_name = '아이유';

create view member_view
as
	select * from member;
select *
from member_view;

select member_addr
from member_view
where member_name='임영웅';

create index idx_member_name on member(member_name);
```