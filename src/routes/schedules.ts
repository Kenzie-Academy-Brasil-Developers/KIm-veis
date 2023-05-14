import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { createSchedule } from "../controllers/schedules";

const scheduleRoutes: Router = Router();

scheduleRoutes.post("", validateToken, createSchedule);
scheduleRoutes.get("/realEstate/:id", validateToken);

export default scheduleRoutes;
