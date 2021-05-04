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
  const sqlQuery = `SELECT et.id, et.first_name, et.last_name, rt.title, dt.name as "Department", salary, 
    CONCAT (mt.first_name," ", mt.last_name) AS "Manager" 
    FROM employees et INNER JOIN employees mt ON et.manager_id = mt.id 
    LEFT JOIN roles rt ON et.role_id = rt.id LEFT JOIN department dt on rt.department_id = dt.id`;
  connection.query(sqlQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
  });
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
