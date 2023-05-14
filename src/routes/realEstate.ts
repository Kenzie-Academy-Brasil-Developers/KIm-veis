import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { createRealEstate, readAllRealEstate } from "../controllers/realEstate";
import validateCategoryId from "../middlewares/validateCategoryId";
import validateAddress from "../middlewares/validateAddress";
import validateData from "../middlewares/validateData";
import { realEstateSchemaReq } from "../schemas/realEstate";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  validateToken,
  validateData(realEstateSchemaReq),
  validateCategoryId,
  validateAddress,
  createRealEstate
);
realEstateRoutes.get("", readAllRealEstate);

export default realEstateRoutes;
