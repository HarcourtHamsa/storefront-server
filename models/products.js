"use strict";
const { Model } = require("sequelize");
const model = require("./index");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Products.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      store: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Stores',
          key: 'id',
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      images: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Products",
    }
  );

  return Products;
};
