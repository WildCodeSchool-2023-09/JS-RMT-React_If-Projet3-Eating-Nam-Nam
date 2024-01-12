-- SQLBook: Code
create table regime (
  id int primary key auto_increment not null,
  name VARCHAR(255) not null,
  description VARCHAR(255) not null
);


create table auth (
  id int primary key auto_increment not null,
  mail VARCHAR(255) not null UNIQUE,
  password VARCHAR(255) not null,
  is_admin BOOLEAN DEFAULT false
);


create table user (
  id int primary key auto_increment not null,
  username VARCHAR(255) not null,
  birthday DATE not null,
  picture VARCHAR(255) not null,
  regime_id int not null,
  auth_id int not null,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  Foreign Key (regime_id) REFERENCES regime(id),
  Foreign Key (auth_id) REFERENCES auth(id) ON DELETE CASCADE
);

create table ingredient (
  id int primary key auto_increment not null,
  name VARCHAR(255) not null,
  quantity VARCHAR(255) not null,
  image VARCHAR(255) not null,
  calorie VARCHAR(255) not null,
  carbonhydrate VARCHAR(255) not null,
  protein VARCHAR(255) not null,
  lipid VARCHAR(255) not null,
  fiber VARCHAR(255) not null,
  is_validated BOOLEAN DEFAULT false,
  category VARCHAR(255)
);

create table recipe (
  id int primary key auto_increment not null,
  picture VARCHAR(255) not null,
	section ENUM('Starter', 'Dish', 'Dessert') not null,
  title VARCHAR(255) not null,
 	preparation_time INTEGER not null,
  cooking_time INTEGER not null,
  difficulty ENUM('Easy', 'Medium', 'Difficult') not null,
  allergen BOOLEAN not null
);

create table recipe_ingr (
  id int primary key auto_increment not null,
  recipe_id INT NOT NULL,
  ingr_id INT NOT NULL,
  Foreign Key (recipe_id) REFERENCES recipe(id),
  Foreign Key (ingr_id) REFERENCES ingredient(id)
);

create table favorites (
  recipe_id INT NOT NULL,
  ingr_id INT NOT NULL,
  Foreign Key (recipe_id) REFERENCES recipe(id),
  Foreign Key (ingr_id) REFERENCES ingredient(id),
  PRIMARY KEY (recipe_id, ingr_id)
);