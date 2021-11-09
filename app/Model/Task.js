import sequelize from "../DataBase/Database.js";
import sqz from "sequelize";
import User from "./User.js";
const { DataTypes, Model } = sqz;

class Task extends Model {}

Task.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Task",
  }
);

Task.belongsTo(User);
export default Task;
