import { z } from "zod";
import { realEstateSchema, realEstateSchemaReq } from "../schemas/realEstate";
import { RealEstate } from "../entities";

type TRealEstateSchema = z.infer<typeof realEstateSchema>;
type TRealEstateSchemaReq = z.infer<typeof realEstateSchemaReq>;

interface IRealEstatePerCategory {
  id: number | undefined;
  name: string;
  realEstate: RealEstate[];
}

export { TRealEstateSchema, TRealEstateSchemaReq, IRealEstatePerCategory };
