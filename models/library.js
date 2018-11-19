
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    

    condition: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		isAlpha: true,
    	}
    }

  });


  Library.associate = function(models) {
    // associations can be defined here

  };




  return Library;
};