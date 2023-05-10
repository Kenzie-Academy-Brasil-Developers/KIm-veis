import { z } from "zod";
import loginSchema from "../schemas/login";

type TLoginSchema = z.infer<typeof loginSchema>;

export default TLoginSchema;
