import SQL from "../DataBase/Database.js";

const Task = {};

Task.login = (data, result) => {
  let query = `SELECT 1 + 1 AS solution`;
  SQL.query(query, function (error, res, fields) {
    if (error) {
      console.log(error);
      result(null, error);
    } else {
      console.log(fields);
      result(null, { res, token: "token" });
    }
  });
};

export default Task;
