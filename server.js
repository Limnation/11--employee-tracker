// Includes packages needed for this application
const inquirer = require("inquirer");

// gets Specific arrays { questions } from questions.js
const { questions } = require("./lib/questions.js");

// gets Specific object { connection } from questions.js
const { connection } = require("./db/questions.js");

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
  connection.query(
    `SELECT e.id, e.first_name, e.Last_name, r.title, d.name as "Department", salary, 
    CONCAT (m.first_name," ", m.last_name) AS "Manager" 
    FROM employee e INNER JOIN employee m ON e.manager_id = m.id 
    LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d on r.department_id = d.id`,
    (err) => {
      if (err) throw err;
    }
  );
};

// View All Employees by Department
viewAllEmployeesByDepartment = () => {};

// View All Employees by Role
viewAllEmployeesByRole = () => {};

// Add Employee
addEmployee = () => {};

// Add Department
addDepartment = () => {};

// Add Role
addRole = () => {};

// Update Employee Role
updateEmployeeRole = () => {};

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
