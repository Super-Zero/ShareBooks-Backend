'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('book', {
    
    book_isbn: {
    	type: DataTypes.STRING,
    	allowNull: false,
        primaryKey: true,
        unique: true
    },

    title: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		notEmpty: true,
    	}
    },

    image: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		notEmpty: true,
    	}
    },

    description:{
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		notEmpty: true,
    	}
    },

    type:{
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		notEmpty: true,
    	}
    },
  });


  Books.associate = function(models) {
    // associations can be defined here


    Books.belongsToMany(models.user, {
        through: models.library,
        foreignKey: 'book_isbn',
    });

    Books.belongsToMany(models.user,{
      through: models.interestedbook,
      foreignKey: 'book_isbn',
    })



  };




  return Books;
};