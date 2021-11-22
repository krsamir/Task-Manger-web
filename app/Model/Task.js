import sequelize from "../DataBase/Database.js";
import sqz from "sequelize";
import User from "./User.js";
import SubTasks from "./SubTask.js";
const { DataTypes, Model } = sqz;

class Task extends Model {}

Task.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Task",
  }
);

Task.belongsTo(User);
Task.Subtasks = Task.hasMany(SubTasks);
export default Task;
