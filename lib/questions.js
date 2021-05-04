const questions = [
  {
    type: "list",
    name: "cases",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees by Department",
      "View All Employees by Role",
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
    message: "which department would you like to see employees for?",
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

// Exports Object arrays
module.exports = { questions, departments };
