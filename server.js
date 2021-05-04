// Includes packages needed for this application
const inquirer = require("inquirer");

// gets Specific arrays { questions } from questions.js
const { questions } = require("./lib/questions.js");

// gets Specific object { connection } from questions.js
const { connection } = require("./db/connection.js");

// arrow fucntion that prompts
const prompts = () => {
  inquirer.prompt(questions).then((questionsData) => {
    switch (questionsData.cases) {
      case "View All Employees":
        viewAllEmployees();
        break;
      case "View All Employees by Department":
        viewAllEmployeesByDepartment();
        break;
      case "View All Employees by Role":
        viewAllEmployeesByRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      default:
        exit();
        break;
    }
  });
};

// View All Employees
viewAllEmployees = () => {
  const sqlQuery = `SELECT e.id, e.first_name, e.Last_name, r.title, d.name as "Department", salary
  FROM employees as e
  LEFT JOIN roles as r 
  ON e.role_id = r.id 
  LEFT JOIN department as d 
  ON r.department_id = d.id`;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    prompts();
  });
};

// View All Employees by Department
viewAllEmployeesByDepartment = () => {
  const sqlQuery = ``;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    prompts();
  });
};

// View All Employees by Role
viewAllEmployeesByRole = () => {
  const sqlQuery = ``;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    prompts();
  });
};

// Add Employee
addEmployee = () => {
  const sqlQuery = ``;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    prompts();
  });
};

// Add Department
addDepartment = () => {
  const sqlQuery = ``;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    prompts();
  });
};

// Add Role
addRole = () => {
  const sqlQuery = ``;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    prompts();
  });
};

// Update Employee Role
updateEmployeeRole = () => {
  const sqlQuery = ``;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    prompts();
  });
};

// exit
exit = () => {
  connection.end();
};

// Creates a function to initialize app
function init() {
  prompts();
}

// Function call to initialize app
init();
