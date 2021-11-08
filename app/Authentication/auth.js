import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.id;
    next();
  } catch (e) {
    console.log({ error: "Authentication required" });
    res.status(401).send({ error: "Authentication required" });
  }
};
