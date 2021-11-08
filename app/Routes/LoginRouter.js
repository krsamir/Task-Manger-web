import express from "express";
const router = express.Router();
import LoginController from "../Controller/LoginController.js";

router.get("/login", LoginController.login);
export default router;
