import sequelize from "../db/connect";
import { DataTypes, Model, UUIDV4, UUID } from 'sequelize'
import { UserStatus } from "../types/user";

const User = sequelize.define('User', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_address: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: UserStatus.INACTIVE,
        values: Object.keys(UserStatus)
    }
},
    {
        timestamps: true,
        freezeTableName: true
    }
)

export default User