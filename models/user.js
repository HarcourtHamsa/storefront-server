'use strict';
const {
  Model
} = require('sequelize');
const { UserStatus } = require('../types/user');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_address: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    phone: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 6,
        max: 20,
      }
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: UserStatus.ACTIVE,
      values: Object.keys(UserStatus)
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'User',
  });
  return User;
};