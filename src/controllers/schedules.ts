import { Request, Response } from "express";
import createService from "../services/schedules/create";
import { scheduleSchemaReq } from "../schemas/schedules";
import { TScheduleSchemaReq } from "../interfaces/schedules";

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
  console.log("passou");
  const returnData = await createService(data);

  return res.status(201).json(returnData);
};

export { createSchedule };
