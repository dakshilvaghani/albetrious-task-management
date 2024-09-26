import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import dbConnection from "./utils/index.js";
import { errorHandler, routeNotFound } from "./middlewares/errormiddlewares.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
import routes from "./routes/index.js";

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://albetrious-task-management-5hs7-dicokm737.vercel.app",
      "https://albetrious-task-management.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api", routes);
app.use(routeNotFound);
app.use(errorHandler);

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
