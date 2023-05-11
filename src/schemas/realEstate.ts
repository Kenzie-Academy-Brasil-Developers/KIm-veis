import { z } from "zod";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const realEstateSchemaReq = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

export { realEstateSchema, realEstateSchemaReq };
