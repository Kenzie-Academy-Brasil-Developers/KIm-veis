import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().optional().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const userSchemaReq = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const userSchemaRes = userSchema.omit({ password: true });

const usersSchema = z.array(userSchemaRes);

const userPartial = userSchemaReq.omit({ admin: true });
const userSchemaPart = userPartial.partial();

export {
  userSchema,
  userSchemaReq,
  userSchemaRes,
  usersSchema,
  userPartial,
  userSchemaPart,
};
