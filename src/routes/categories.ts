import { Router } from "express";
import { createCategory, readAllCategory } from "../controllers/categories";
import validateToken from "../middlewares/validateToken";
import validateName from "../middlewares/validateName";

const categoriesRouter: Router = Router();

categoriesRouter.post("", validateToken, validateName, createCategory);
categoriesRouter.get("", readAllCategory);

export default categoriesRouter;
