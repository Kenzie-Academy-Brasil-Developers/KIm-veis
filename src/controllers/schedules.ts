import { Request, Response } from "express";
import createService from "../services/schedules/create";
import { scheduleSchemaReq } from "../schemas/schedules";
import { TScheduleSchemaReq } from "../interfaces/schedules";
import readAllPerRealEstateService from "../services/schedules/readAllPerRealEstate";

const createSchedule = async (
  req: Request,
  res: Response
): Promise<Response> => {
  req.body.date = new Date(req.body.date);

  const [hours, minutes] = req.body.hour.split(":");
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  req.body.hour = date;

  const data: TScheduleSchemaReq = scheduleSchemaReq.parse(req.body);
  await createService(data);

  return res.status(201).json({ message: "Schedule created" });
};

const readAllPerRealEstateSchedule = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const returnData = await readAllPerRealEstateService(
    id,
    res.locals.userAdmin
  );

  if (returnData.length === 0) {
    return res.json({ message: "RealEstate not found" });
  }

  return res.json(returnData);
};

export { createSchedule, readAllPerRealEstateSchedule };
