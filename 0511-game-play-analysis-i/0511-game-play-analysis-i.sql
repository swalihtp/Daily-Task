# Write your MySQL query statement below
select distinct player_id,(select event_date from Activity where a.player_id=player_id order by event_date limit 1) as first_login from Activity a
;
