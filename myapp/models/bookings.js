var Sequelize = require('sequelize');
var sequelize = require('../Database/createdb.js');

// Create mapping between table and booking
// model for a Bookings

var Bookings = sequelize.define('Bookings',{
    phone: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true
  
    },
    seats: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    bookingdate: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    bookingtime: {
      type: Sequelize.STRING(5),
      allowNull: false
    },
    name:{
      type: Sequelize.TEXT,
      allowNull: false,
    }
},
{
  //freezeTableName: true // Model tableName will be the same as the model name
  timestamps: false
});

/** creating table bookings if not exist */


//Bookings.sync({ force: true });



module.exports = Bookings;
