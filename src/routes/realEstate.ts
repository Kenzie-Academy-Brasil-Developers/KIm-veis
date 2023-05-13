import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { createRealEstate, readAllRealEstate } from "../controllers/realEstate";
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
realEstateRoutes.get("", readAllRealEstate);

export default realEstateRoutes;
