import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;


app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

import { connectDB } from "./src/config/dbConfig.js";
connectDB();

import CanRouter from "./src/routers/CanRouter.js"
app.use("/api/v1/Candidate", CanRouter);

// catch when router is not found
app.use("*", (req, res, next) => {
    const error = {
      message: "404 page not found!",
      code: 404,
    };
    next(error);
  });
  
  // global error handler
  app.use((error, req, res, next) => {
    console.log(error, "qwqwqw");
    const code = error.code || 500;
    res.status(code).json({
      status: "error",
      message: error.message,
    });
  });

app.listen(PORT, (error) => {
    error
      ? console.log(error,  "sdfdsfsdf")
      : console.log(`you server is ready at http://localhost:${PORT}`);
  });