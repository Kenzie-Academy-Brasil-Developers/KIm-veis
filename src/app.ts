import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErros } from "./error";
import userRoutes from "./routes/users";
import loginRoutes from "./routes/login";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleErros);
export default app;
