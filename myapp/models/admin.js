var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');


var Admins = sequelize.define('admins',
{
  username :{
  type : Sequelize.STRING(100),
  unique: true
},
  password : Sequelize.STRING(100),
  type: {
   type : Sequelize.STRING(100),
   defaultValue: "employee"
   }
})

/** 
Admins.sync();

var admins = Admins.create({username: "test", password: bcrypt.hashSync("test",null,null), type: "owner"});

console.log("Created original admin");
*/
module.exports = Admins;
