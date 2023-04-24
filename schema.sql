drop database cogent_do_connect;
create database cogent_do_connect;
use cogent_do_connect;
drop table user;
create table User(id int NOT NULL AUTO_INCREMENT, email varchar(40), name varchar(40), password varchar(40), user_type varchar(40), username varchar(40), PRIMARY KEY (id));

select * from user;
insert into user (id,email, name, password, user_type, username) values (1,"abc@gmail.com", "group3","password","user","group3");

insert into user values ("1","abc@gmail.com", "mike","password","user","mikeusername");