```sql
select *
from member;

select mem_id, mem_name, addr
from member;

create view v_member
as
	select mem_id, mem_name, addr;
    
select * from v_member;
select mem_name, addr from v_member
where addr in('서울','경기')
order by addr;
```
```sql
create view v_memberbuy
as
select b.mem_id ,m.mem_name, b.prod_name, m.addr, concat(m.phone1, m.phone2) '연락처'
from buy b, member m
where b.mem_id = m.mem_id;

select * from v_memberbuy
where mem_name="블랙핑크";
```

```sql
create view v_viewtest1
as
select b.mem_id 'Member ID', m.mem_name as 'Member Name',
		b.prod_name 'Product Name',
        concat(m.phone1,m.phone2) as "Office Phone"
from buy b
	inner join member m
    on b.mem_id = m.mem_id;
    
select * from v_viewtest1;

select distinct `Member ID`, `Member Name` 
from v_viewtest1;
```

```sql
alter view v_viewtest1
as
select b.mem_id '회원 아이디', m.mem_name as '회원 이름',
		b.prod_name 'Product Name',
        concat(m.phone1,m.phone2) as "Office Phone"
from buy b
	inner join member m
    on b.mem_id = m.mem_id;
    
    select distinct `회원 아이디`, `회원 이름` 
from v_viewtest1;
```
```sql
drop view  v_viewtest1;
    
 create or replace view  v_viewtest2
    as
    select mem_id, mem_name, addr
    from member;
    
    show create view v_viewtest2;
    desc v_viewtest2;
    
    update v_member set addr = '부산'
    where mem_id ='blk';
    
    select *
    from member
        where mem_id ='blk';
        
	insert into v_member(mem_id, mem_name, addr) values('bts','방탄소년단','경기');
    
    describe member;
    
```
```sql
  create view v_height167
    as
    select *
    from member
    where height>=167;
    
    select * from v_height167;
	
    delete from  v_height167
    
    where height<167;
    
    insert into v_height167 
    values ('TRA','티아라',6,'서울',null, null, 159, '2005-01-91');
    
    select * from v_height167;
    
    alter view v_height167
    as
    select * from member
    where height >= 167
    with check option;
    
        insert into v_height167 
    values ('TOB','텔레토비',4,'영국',null, null, 140, '1995-01-01');
```

```sql
    create view v_complex
    as
    select b.mem_id, m.mem_name, b.prod_name, m.addr
    from buy b, member m
    where b.mem_id=m.mem_id;
    
    select * from v_complex;
```
```sql
    drop table if exists buy, member;
    
    select * from v_height167;

       check table v_height167;
```
