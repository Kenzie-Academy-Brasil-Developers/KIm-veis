import { Router } from "express";
import loginUser from "../controllers/login";

const loginRoutes: Router = Router();

loginRoutes.post("", loginUser);

export default loginRoutes;
