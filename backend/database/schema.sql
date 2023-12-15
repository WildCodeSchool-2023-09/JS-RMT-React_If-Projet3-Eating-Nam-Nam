create table regime (
  id int primary key auto_increment not null,
  name VARCHAR(255) not null,
  description VARCHAR(255) not null
);


create table auth (
  id int primary key auto_increment not null,
  mail VARCHAR(255) not null,
  password VARCHAR(255) not null,
  isadmin BOOLEAN
);


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

