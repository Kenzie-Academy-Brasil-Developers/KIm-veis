import { z } from "zod";
import { realEstateSchema, realEstateSchemaReq } from "../schemas/realEstate";

type TRealEstateSchema = z.infer<typeof realEstateSchema>;
type TRealEstateSchemaReq = z.infer<typeof realEstateSchemaReq>;

export { TRealEstateSchema, TRealEstateSchemaReq };
