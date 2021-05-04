USE employees_db;

INSERT INTO department(name)
VALUES ('Chief'),
('Director'),
('DevOps'),
('Management'),
('Technician');

INSERT INTO roles(title, salary, department_id)
VALUES
('Chief Information Officer', 300000, 1),
('Chief Technology Officer', 150000, 1),
('Director of Technology', 125000, 2),
('IT Director', 100000, 3),
('IT Manager', 75000, 3),
('Management Information Systems', 60000, 4),
('Technical Operations Officer', 50000, 5);

INSERT INTO employees(first_name, last_name, role_id, manager_id) 
VALUES
('Boby', 'Chiefy', 1, NULL),
('Kitty', 'Chiefy', 1, NULL),
('Billy', 'bobby', 2, NULL),
('Doggy', 'Toy', 4, 1),
('Burnett', 'Vodka', 5, 1),
('Tony', 'Tiger', 3, 1);