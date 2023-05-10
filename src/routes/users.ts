import { Router } from "express";
import { createUser, readAllUser, updateUser } from "../controllers/users";
import validateEmail from "../middlewares/validateEmail";
import validateToken from "../middlewares/validateToken";
import validateId from "../middlewares/validateId";

const userRoutes: Router = Router();

userRoutes.post("", validateEmail, createUser);
userRoutes.get("", validateToken, readAllUser);
userRoutes.patch("/:id", validateId, validateToken, updateUser);

export default userRoutes;
