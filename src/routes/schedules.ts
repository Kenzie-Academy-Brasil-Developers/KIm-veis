import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import {
  createSchedule,
  readAllPerRealEstateSchedule,
} from "../controllers/schedules";

const scheduleRoutes: Router = Router();

scheduleRoutes.post("", validateToken, createSchedule);
scheduleRoutes.get(
  "/realEstate/:id",
  validateToken,
  readAllPerRealEstateSchedule
);

export default scheduleRoutes;
