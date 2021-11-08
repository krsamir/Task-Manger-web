import LoginController from "../Controller/LoginController.js";

const appRoutes = (app) => {
  app.route("/api/login").post(LoginController.login);
};

export default appRoutes;
