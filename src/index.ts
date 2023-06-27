import express from "express";
import dotenv from "dotenv";
import http from "http";
import morgan from "morgan";
import helmet from "helmet";
import router from "./routes";
import mongoose from "mongoose";

const main = async () => {
  // Configure dotenv from dotenv file in project root
  dotenv.config({ path: `${__dirname}/../.env` });

  await mongoose.connect(process.env.MONGODB ?? "");

  // Create express app
  const app = express();

  // Enable helmet
  app.use(helmet());

  // Enable morgan as http logger
  app.use(morgan("dev"));

  // Allow JSON data
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: false,
    })
  );

  app.use("/", router);

  // Mount express app on http listener
  const server = http.createServer(app);

  // Listen on port
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}`);
  });
};

main();
