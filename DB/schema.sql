-- Drops employee Database if exisits
DROP DATABASE IF EXISTS employees_db;
-- Creates Database employee
CREATE DATABASE employees_db;
-- use Database
USE employees_db;

-- Create table department
CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

-- Create table roles
CREATE TABLE roles (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(7,0) NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT department_fk FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- Create table employee
CREATE TABLE employees (
    id INTEGER NOT NULL AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    PRIMARY KEY(id),
    CONSTRAINT role_fk FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT manager_fk FOREIGN KEY(manager_id) REFERENCES employees(id) ON DELETE SET NULL
);



