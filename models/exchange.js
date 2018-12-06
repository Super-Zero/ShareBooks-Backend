'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exchange = sequelize.define('exchange', {
    
    
  	exchange_id:{
  		type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
  	},

    exchange_date: {
    	type: DataTypes.DATE,
    	allowNull: false,
    	validate:{
    		isDate: true,
    	}
    },

    expiration_date: {
    	type: DataTypes.DATE,
    	allowNull: false,
    	validate:{
    		isDate: true,
    	}

    	
    },

    exchange_hash: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate:{
    		isAlphanumeric: true,
    	}
    },


  });

  Exchange.associate = function(models) {
    // associations can be defined here

    Exchange.belongsTo(models.user,{
      as: 'user_id_1'
    });

    Exchange.belongsTo(models.user,{
      as: 'user_id_2'
    });


    Exchange.belongsTo(models.book, {
        as: "book_isbn_1"
    });

    Exchange.belongsTo(models.book, {
        as: "book_isbn_2"
    });
  };

  
  return Exchange;
};