'use strict';
module.exports = (sequelize, DataTypes) => {
    const InterestedBooks = sequelize.define('interestedbook', {
      
  
      status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          validate:{
              isAlpha: true,
          }
      }
  
    });
  
  
    InterestedBooks.associate = function(models) {
      // associations can be defined here
  
    };
  
  
  
  
    return InterestedBooks;
  };