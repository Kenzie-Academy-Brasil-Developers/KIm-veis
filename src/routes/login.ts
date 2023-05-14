import { Router } from "express";
import loginUser from "../controllers/login";
import validateData from "../middlewares/validateData";
import loginSchema from "../schemas/login";

const loginRoutes: Router = Router();

loginRoutes.post("", validateData(loginSchema), loginUser);

export default loginRoutes;
