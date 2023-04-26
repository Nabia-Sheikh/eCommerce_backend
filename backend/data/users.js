const bcrypt = require("bcryptjs")

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Saba",
    email: "saba@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sana",
    email: "sana@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

module.exports = users
