import User from "../Model/User.js";
import sequelize from "../DataBase/Database.js";
const Task = {};

Task.login = (req, res) => {
  res.send("Loaded");
  // LoginModel.login(req.body, (err, response) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(response);
  //   }
  // });
};

export default Task;
