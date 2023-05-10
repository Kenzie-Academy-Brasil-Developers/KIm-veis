import { z } from "zod";
import {
  userPartial,
  userSchema,
  userSchemaReq,
  userSchemaRes,
} from "../schemas/users";
import { DeepPartial } from "typeorm";

type TUserSchema = z.infer<typeof userSchema>;
type TUserSchemaReq = z.infer<typeof userSchemaReq>;
type TUserSchemaRes = z.infer<typeof userSchemaRes>;

type TUserPartial = z.infer<typeof userPartial>;
type TUserSchemaPart = DeepPartial<TUserPartial>;

export { TUserSchema, TUserSchemaReq, TUserSchemaRes, TUserSchemaPart };
