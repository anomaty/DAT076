'use strict';

var Sequelize = require('sequelize');

var sq = new Sequelize('restaurant_db','root','p1ratida', {
  host :'localhost',
  dialect : 'mysql',
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000


  }
});

module.exports = sq;
