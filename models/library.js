'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('library', {
    

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

  };




  return Library;
};