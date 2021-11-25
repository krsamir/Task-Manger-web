import Task from "../Model/Task.js";
import Subtasks from "../Model/SubTask.js";
import sequelize from "../DataBase/Database.js";
const Data = {};

Data.CreateTask = async (req, res) => {
  const data = req.body
    .map((val) => {
      if (val.name === "") {
        return null;
      } else {
        return { ...val, UserId: req.id };
      }
    })
    .filter((_) => _ !== null);
  try {
    console.log(sequelize.models.Subtask);
    console.log(JSON.parse(JSON.stringify(data)));
    await Task.bulkCreate(data, {
      include: [
        {
          association: Task.subtasks,
        },
      ],
      validate: true,
    });
    res.send({ status: 0, message: "Task Created" });
  } catch (error) {
    console.log(error);
    res.send({ status: 1, message: "Unable to create Task", error });
  }
};
Data.getAllTask = async (req, res) => {
  try {
    const data = await Task.findAll({
      attributes: ["name"],
      include: Subtasks,
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

export default Data;
