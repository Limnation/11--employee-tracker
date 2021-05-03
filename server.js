// Includes packages needed for this application
const inquirer = require("inquirer");

// gets Specific arrays { questions } from questions.js
const { questions } = require("./lib/questions.js");

// arrow fucntion that prompts
const prompts = () => {
  inquirer.prompt(questions).then((DBData) => {
    switch (DBData.DBcases) {
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
        endConnection();
        break;
    }
  });
};

// Creates a function to initialize app
function init() {
  prompts();
}

// Function call to initialize app
init();
