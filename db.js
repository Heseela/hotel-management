const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("hotel",'root','',{
    host:"localhost",
    dialect:"mysql"
});

module.exports=sequelize;