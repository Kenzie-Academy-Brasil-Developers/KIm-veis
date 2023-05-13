import { Repository } from "typeorm";
import { AppError } from "../../error";
import {
  TRealEstateSchema,
  TRealEstateSchemaReq,
} from "../../interfaces/realEstate";
import RealEstate from "../../entities/realEstate";
import { AppDataSource } from "../../data-source";
import { realEstateSchema } from "../../schemas/realEstate";

const createService = async (
  data: TRealEstateSchemaReq,
  locals: boolean
): Promise<TRealEstateSchema> => {
  if (locals === false) {
    throw new AppError("Unauthorized request", 401);
  }

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate = realEstateRepository.create(data);
  await realEstateRepository.save(realEstate);

  realEstate.value = Number(realEstate.value);
  const returnData: TRealEstateSchema = realEstateSchema.parse(realEstate);

  return returnData;
};

export default createService;
