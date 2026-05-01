import serverless from "serverless-http";
import dotenv from "dotenv";
import express from "express";
import router from "./routes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(router);

export const handler = serverless(app);