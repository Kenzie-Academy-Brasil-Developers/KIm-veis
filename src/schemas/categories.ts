import { z } from "zod";

const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});
const categorySchemaReq = categorySchema.omit({ id: true });

const categoriesSchema = z.array(categorySchema);

export { categorySchema, categorySchemaReq, categoriesSchema };
