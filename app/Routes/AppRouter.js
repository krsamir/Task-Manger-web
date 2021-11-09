import express from "express";
const router = express.Router();
import AppController from "../Controller/AppController.js";
import { isAuthenticated } from "../Authentication/auth.js";
router.use(isAuthenticated);

router.post("/tasks", AppController.CreateTask);
router.get("/tasks", AppController.getAllTask);
export default router;
