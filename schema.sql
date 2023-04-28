drop database cogent_do_connect;
create database cogent_do_connect;
use cogent_do_connect;
drop table user;
create table User(id int NOT NULL AUTO_INCREMENT, email varchar(40), name varchar(40), password varchar(40), user_type varchar(40), username varchar(40), PRIMARY KEY (id));

select * from user;
insert into user (id,email, name, password, user_type, username) values (2,"abc@gmail.com", "group3","password","user","group3");

insert into user values ("12","abc@gmail.com", "admin2","password","admin","admin2");
update user set name = "user", user_type="user" where id =2;
Select * from question where status = 'true';
select * from question;
ALTER TABLE question MODIFY image_src VARCHAR(10000);
delete from question where id =43;
insert into question values ("2","10-23-2023", "hello","","false","title","Actors","1","2");
update question set status = "true" where id =1;
select * from answer;
select * from chat;
delete from chat where id = 11;

use do_connect_test;
select * from users;