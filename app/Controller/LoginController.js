import User from "../Model/User.js";
import jwt from "jsonwebtoken";
import sequelize from "../DataBase/Database.js";
const Task = {};

const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env;
Task.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ status: 0, data: user });
  } catch (error) {
    console.log(error);
    res.send({ status: 2, data: error });
  }
};

Task.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    const data = user.toJSON();
    if (data.password === password) {
      const token = jwt.sign({ id: data.username, id: data.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION_TIME,
      });
      res.send({ status: 1, token });
    } else {
      res.send({ status: 0, message: "Check Your Credentials!!" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: 0, message: "Caught into some issue!", error });
  }
};

export default Task;
