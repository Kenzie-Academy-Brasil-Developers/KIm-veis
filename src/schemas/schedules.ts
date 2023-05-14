import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number(),
  date: z.date(),
  hour: z.date(),
});

const scheduleSchemaReq = scheduleSchema.omit({ id: true });

export { scheduleSchema, scheduleSchemaReq };
