import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number(),
  date: z.date(),
  hour: z.date(),
  realEstateId: z.number().int(),
});

const scheduleSchemaReq = scheduleSchema.omit({ id: true });

const schedulesSchema = z.array(scheduleSchema);

export { scheduleSchema, scheduleSchemaReq, schedulesSchema };
