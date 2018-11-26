 const bcrypt = require('bcrypt-nodejs');



module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        isAlpha: true,
      },
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        isAlpha: true,
      },
    },
    
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate:{
        notEmpty: true,

      },
    },

    password_hash: {
      type: DataTypes.STRING
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        isNumeric: true,
      },
    },
    
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isNumeric: true,
      },
    },

    school: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,

      },
    },

    student_major: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        isAlpha: true,
      },
    },
    
    student_classification: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        isAlpha: true,
      },
    },
  });


  Users.associate = function(models) {
    // associations can be defined here

    Users.belongsToMany(models.Books,{
      through: models.Library,
      foreignKey: 'user_id',
    });
  };



  Users.beforeCreate((user) =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password_hash = hashedPw;
    })
  );

  return Users;
}