const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class likes extends Model { }

// Sequelize will create this table if it doesn't exist on startup
likes.init({
    LikeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    PostID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,
    modelName: 'likes', 
    timestamps: false, 
    freezeTableName: true 
});

module.exports = likes;
