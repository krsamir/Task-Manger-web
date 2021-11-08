import express from "express";
const router = express.Router();
import LoginController from "../Controller/LoginController.js";

router.post("/register", LoginController.register);
router.post("/login", LoginController.login);
export default router;
