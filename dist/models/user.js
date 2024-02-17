"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("../db/connect"));
const sequelize_1 = require("sequelize");
const user_1 = require("../types/user");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email_address: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: user_1.UserStatus.INACTIVE,
        values: Object.keys(user_1.UserStatus)
    }
}, {
    modelName: 'User',
    sequelize: connect_1.default,
    timestamps: true,
    freezeTableName: true
});
exports.default = User;
//# sourceMappingURL=user.js.map