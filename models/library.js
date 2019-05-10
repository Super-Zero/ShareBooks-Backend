'use strict';
var shortid = require('short-id')
// const models = require('../models');
// const Users = models.user;
// const Books = models.book;

module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('library', {
    
    // hash:{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: shortid.generate()
    // },
    condition: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		notEmpty: true,
    	}
    }

  });


  Library.associate = function(models) {
    // associations can be defined here

    Library.belongsTo(models.user, {foreignKey : 'user_id'});

    Library.belongsTo(models.book, {foreignKey : 'book_isbn'});

  };




  return Library;
};