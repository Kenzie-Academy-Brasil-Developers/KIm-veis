import { Router } from "express";
import { createUser, readAllUser } from "../controllers/users";
import validateEmail from "../middlewares/validateEmail";
import validateToken from "../middlewares/validateToken";

const userRoutes: Router = Router();

userRoutes.post("", validateEmail, createUser);
userRoutes.get("", validateToken, readAllUser);

export default userRoutes;
