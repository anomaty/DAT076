var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');


var Employees = sequelize.define('admins',
{
  username :{
  type : Sequelize.STRING(100),
  unique: true
},
  password : Sequelize.STRING(100)
})

//Employees.sync();

//console.log("Created original admin");

module.exports = Employees;
