import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { createRealEstate } from "../controllers/realEstate";

const realEstateRoutes: Router = Router();

realEstateRoutes.post("", validateToken, createRealEstate);

export default realEstateRoutes;
