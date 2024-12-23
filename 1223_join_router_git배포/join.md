```sql
select *
from buy
	inner join member
    on buy.mem_id = member.mem_id
	order by buy.mem_id;
    
    select m.mem_id, m.mem_name, b.prod_name, m.addr , concat(m.phone1 , m.phone2) 연락처
    from buy b
		inner join member m
        on b.mem_id = m.mem_id
	order by m.mem_id;
    
    -- 감사인사장 보내기 위한 자료 요청
    
        select distinct m.mem_id, m.mem_name, m.addr
    from buy b
		inner join member m
        on b.mem_id = m.mem_id
	order by m.mem_id;
  ```