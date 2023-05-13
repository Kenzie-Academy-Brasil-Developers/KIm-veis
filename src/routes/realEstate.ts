import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { createRealEstate } from "../controllers/realEstate";
import validateCategoryId from "../middlewares/validateCategoryId";

const realEstateRoutes: Router = Router();

realEstateRoutes.post("", validateToken, validateCategoryId, createRealEstate);

export default realEstateRoutes;
