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

// Exports Object arrays
module.exports = { questions, departments, managers };
