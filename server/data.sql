CREATE DATABASE todo-app;


CREATE TABLE  todos(
    id varchar(255) primary key,
    user_email varchar(255),
    title varchar(30),
    progress int,
    date varchar(300)
);

CREATE TABLE users(
    email varchar(255) primary key,
    hashed_password varchar(255) 
);