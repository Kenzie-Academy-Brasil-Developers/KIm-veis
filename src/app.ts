import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErros } from "./error";

const app = express();
app.use(express.json());

app.use(handleErros);
export default app;
