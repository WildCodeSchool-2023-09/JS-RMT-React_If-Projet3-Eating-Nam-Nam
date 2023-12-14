create table regime (
  id int primary key auto_increment not null,
  name VARCHAR(255) not null,
  description VARCHAR(255) not null
);

INSERT INTO regime(name, description) VALUES ('Flexitarien', 'Mange de tout, normalement');
INSERT INTO regime(name, description) VALUES ('Végétarien', 'Mange ni poisson, ni viande');
INSERT INTO regime(name, description) VALUES ('Cétogène', 'Privilégie uniquement les aliments à haute teneur en liquide');

create table auth (
  id int primary key auto_increment not null,
  mail VARCHAR(255) not null,
  password VARCHAR(255) not null,
  isadmin BOOLEAN
);

INSERT INTO auth(mail,password,isadmin) VALUES ('valeriane.chevalier@gmail.com',"valériane",true);
INSERT INTO auth(mail,password,isadmin) VALUES ('g.duffort@gmail.com',"grégory",true);
INSERT INTO auth(mail,password,isadmin) VALUES ('thd.dps@gmail.com',"thibaud",true);
INSERT INTO auth(mail,password,isadmin) VALUES ('leslie.moraud@gmail.com',"leslie",true);
INSERT INTO auth(mail,password,isadmin) VALUES ('tonton.roger@gmail.com',"tontonRoger",false);


create table user (
  id int primary key auto_increment not null,
  username VARCHAR(255) not null,
  birthday DATE not null,
  picture VARCHAR(255) not null,
  regime_id int not null,
  auth_id int not null,
  date_created DATE,
  date_update DATE,
  Foreign Key (regime_id) REFERENCES regime(id),
  Foreign Key (auth_id) REFERENCES auth(id)
);

INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Valihna','1993-11-03','https://upload.wikimedia.org/wikipedia/commons/c/c3/Chat_mi-long.jpg',1,1,'2023-12-13',null);
INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Grèg','1984-12-31','https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cat_playing_with_a_lizard.jpg/1920px-Cat_playing_with_a_lizard.jpg',1,2,'2023-12-13',null);
INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Tibo','1991-08-03','https://upload.wikimedia.org/wikipedia/commons/5/55/Chat_tigr%C3%A9_%C3%A0_poils_mi-longs.jpg',1,3,'2023-12-13',null);
INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Leslie','1986-10-21','https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Photo_Chat_Noir_et_blanc.jpg/1280px-Photo_Chat_Noir_et_blanc.jpg',1,4,'2023-12-13',null);
INSERT INTO user(username,birthday,picture,regime_id,auth_id,date_created,date_update) VALUES ('Tonton Roger','1960-07-05','https://upload.wikimedia.org/wikipedia/commons/b/bd/Dogue_de_Bordeaux.jpg',2,5,'2023-12-13',null);
