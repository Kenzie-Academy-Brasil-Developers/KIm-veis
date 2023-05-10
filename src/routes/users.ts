import { Router } from "express";
import { createUser } from "../controllers/users";
import validateEmail from "../middlewares/validateEmail";

const userRoutes: Router = Router();

userRoutes.post("", validateEmail, createUser);

export default userRoutes;
