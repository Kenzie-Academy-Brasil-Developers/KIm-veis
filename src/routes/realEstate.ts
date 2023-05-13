import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { createRealEstate } from "../controllers/realEstate";
import validateCategoryId from "../middlewares/validateCategoryId";
import validateAddress from "../middlewares/validateAddress";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  validateToken,
  validateCategoryId,
  validateAddress,
  createRealEstate
);

export default realEstateRoutes;
