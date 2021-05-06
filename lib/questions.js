// gets Specific object { connection } from questions.js
const { selectRoleArr } = require("../server.js");

const questions = [
  {
    type: "list",
    name: "cases",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees by Department",
      "View All Employees by Manager",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Update Employee Role",
      "Exit",
    ],
  },
];

const departments = [
  {
    type: "list",
    name: "department",
    message: "Which department would you like to see employees for?",
    choices: [
      "Chief",
      "Director",
      "View All Employees by Role",
      "DevOps",
      "Management",
      "Technician",
    ],
  },
];

const managers = [
  {
    type: "list",
    name: "managerFName",
    message: "View all employee by manager",
    choices: ["Boby", "Kitty", "Billy"],
  },
];

const addEmployeeArr = [
  {
    type: "input",
    name: "fName",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "LName",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: selectRoleArr(),
  },
  {
    type: "list",
    name: "managerName",
    message: "Who is your manager?",
    choices: [{ name: "boby", value: 1 }, "Kitty", "Billy", "None"],
  },
];

const addDepartmentArr = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the department you want to add?",
  },
];

const addRoleArr = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the role?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salaray of the role?",
  },
  {
    type: "input",
    name: "department",
    message: "What department does the role belong to?",
  },
];

// Exports Object arrays
module.exports = {
  questions,
  departments,
  managers,
  addEmployeeArr,
  addDepartmentArr,
  addRoleArr,
};
