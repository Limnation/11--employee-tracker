const questions = [
  {
    type: "list",
    name: "cases",
    message: "What would you like to do?",
    choices: [
      "View All",
      "View All Employees by Department",
      "View All Employees by Manager",
      "Add Employee",
      "Add Department",
      "Add Role",
      "View Employee",
      "View Department",
      "View Role",
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
    choices: [
      { name: "boby", value: 1 },
      { name: "Kitty", value: 2 },
      { name: "Billy", value: 3 },
    ],
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
    choices: [
      { name: "Chief Information Officer", value: 1 },
      { name: "Chief Technology Officer", value: 2 },
      { name: "Director of Technology", value: 3 },
      { name: "IT Director", value: 4 },
      { name: "IT Manager", value: 5 },
      { name: "Management Information Systems", value: 6 },
      { name: "Technical Operations Officer", value: 7 },
    ],
  },
  {
    type: "list",
    name: "managerName",
    message: "Who is your manager?",
    choices: [
      { name: "boby", value: 1 },
      { name: "Kitty", value: 2 },
      { name: "Billy", value: 3 },
    ],
  },
];

const addDepartmentArr = [
  {
    type: "input",
    name: "d_name",
    message: "What is the name of the department you want to add?",
  },
];

const addRoleArr = [
  {
    type: "input",
    name: "r_title",
    message: "What is the name of the role?",
  },
  {
    type: "input",
    name: "r_salary",
    message: "What is the salaray of the role?",
  },
  {
    type: "list",
    name: "r_department_id",
    choices: [
      { name: "Chief", value: 1 },
      { name: "Director", value: 2 },
      { name: "DevOps", value: 3 },
      { name: "Management", value: 4 },
      { name: "Technician", value: 5 },
    ],
  },
];

const updateEmployeeRoleArr = [
  {
    type: "input",
    name: "LName",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: [
      { name: "Chief Information Officer", value: 1 },
      { name: "Chief Technology Officer", value: 2 },
      { name: "Director of Technology", value: 3 },
      { name: "IT Director", value: 4 },
      { name: "IT Manager", value: 5 },
      { name: "Management Information Systems", value: 6 },
      { name: "Technical Operations Officer", value: 7 },
    ],
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
  updateEmployeeRoleArr,
};
