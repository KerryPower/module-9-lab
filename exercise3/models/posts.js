const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class posts extends Model { }

// Sequelize will create this table if it doesn't exist on startup
posts.init({
    PostID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize: sequelizeInstance,
    modelName: 'posts', 
    timestamps: false, 
    freezeTableName: true 
});

module.exports = posts;
