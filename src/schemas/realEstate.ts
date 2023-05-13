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

const realEstateSchemaReq = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    addressId: true,
  })
  .extend({
    address: z.object({
      street: z.string().max(45),
      zipCode: z.string().max(8),
      number: z.string().max(7).optional(),
      city: z.string().max(20),
      state: z.string().max(2),
    }),
  });

export { realEstateSchema, realEstateSchemaReq };
