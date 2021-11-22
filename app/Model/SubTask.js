import sequelize from "../DataBase/Database.js";
import sqz from "sequelize";
import Task from "./Task.js";
const { DataTypes, Model } = sqz;

class SubTasks extends Model {}

SubTasks.init(
  {
    task: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Subtask",
  }
);

// Task.Subtask = Task.hasMany(SubTasks);
export default SubTasks;
