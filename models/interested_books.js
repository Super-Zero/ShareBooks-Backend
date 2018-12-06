
module.exports = (sequelize, DataTypes) => {
    const InterestedBooks = sequelize.define('InterestedBooks', {
      
  
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