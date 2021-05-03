const questions = [
  {
    type: "list",
    name: "dbAction",
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

// Exports Object arrays
module.exports = { questions };
