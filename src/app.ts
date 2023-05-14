import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErros } from "./error";
import userRoutes from "./routes/users";
import loginRoutes from "./routes/login";
import categoriesRouter from "./routes/categories";
import realEstateRoutes from "./routes/realEstate";
import scheduleRoutes from "./routes/schedules";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", scheduleRoutes);

app.use(handleErros);
export default app;
