import express from "express";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import LoginRoutes from "./app/Routes/LoginRouter.js";
import AppRoutes from "./app/Routes/AppRouter.js";
config();
const { PORT } = process.env;
const app = express();

app.use("/auth", LoginRoutes);
app.use("/api", AppRoutes);
// to refer build pages
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "./frontend/build")));
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Application is running at port ${PORT}`);
});
