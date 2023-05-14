import { z } from "zod";
import { scheduleSchema, scheduleSchemaReq } from "../schemas/schedules";

type TScheduleSchema = z.infer<typeof scheduleSchema>;
type TScheduleSchemaReq = z.infer<typeof scheduleSchemaReq>;

export { TScheduleSchema, TScheduleSchemaReq };
