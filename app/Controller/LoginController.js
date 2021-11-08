import LoginModel from "../Model/LoginModel.js";

const Task = {};

Task.login = (req, res) => {
  LoginModel.login(req.body, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};

export default Task;
