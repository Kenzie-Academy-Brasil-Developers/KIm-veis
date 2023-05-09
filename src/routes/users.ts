import { Router } from "express";
import { createUser } from "../controllers/users";

const userRoutes: Router = Router();

userRoutes.post("", createUser);

export default userRoutes;
