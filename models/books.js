
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    
    book_isbn: {
    	type: DataTypes.INTEGER,
    	allowNull: false,
        primaryKey: true,
        unique: true
    },

    title: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		isAlpha: true,
    	}
    },

    image: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		isAlpha: true,
    	}
    },

    description:{
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		isAlphanumeric: true,
    	}
    },

    type:{
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		isAlpha: true,
    	}
    },
  });


  Books.associate = function(models) {
    // associations can be defined here


    Books.belongsToMany(models.Users, {
        through: models.Library,
        foreignKey: 'book_isbn',
    });

    Books.belongsToMany(models.Users,{
      through: models.InterestedBooks,
      foreignKey: 'book_isbn',
    })



  };




  return Books;
};