import { Router } from "express";
import { createCategory, readAllCategory } from "../controllers/categories";
import validateToken from "../middlewares/validateToken";
import validateName from "../middlewares/validateName";
import { readAllPerCategoryRealEstate } from "../controllers/realEstate";
import validateData from "../middlewares/validateData";
import { categorySchemaReq } from "../schemas/categories";

const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  validateToken,
  validateName,
  validateData(categorySchemaReq),
  createCategory
);
categoriesRouter.get("", readAllCategory);
categoriesRouter.get("/:id/realEstate", readAllPerCategoryRealEstate);

export default categoriesRouter;
