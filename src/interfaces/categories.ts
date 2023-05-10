import { z } from "zod";
import { categorySchema, categorySchemaReq } from "../schemas/categories";

type TCategorySchema = z.infer<typeof categorySchema>;
type TCategorySchemaReq = z.infer<typeof categorySchemaReq>;

export { TCategorySchema, TCategorySchemaReq };
