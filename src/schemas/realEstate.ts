import { z } from "zod";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  addressId: z.number(),
  categoryId: z.number(),
});

const realEstateSchemaReq = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const realEstatesSchema = z.array(realEstateSchema);

export { realEstateSchema, realEstateSchemaReq, realEstatesSchema };
