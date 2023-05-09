import { z } from "zod";
import { userSchema, userSchemaReq, userSchemaRes } from "../schemas/users";

type TUserSchema = z.infer<typeof userSchema>;
type TUserSchemaReq = z.infer<typeof userSchemaReq>;
type TUserSchemaRes = z.infer<typeof userSchemaRes>;

export { TUserSchema, TUserSchemaReq, TUserSchemaRes };
