import { Repository } from "typeorm";
import { TRealEstateSchema } from "../../interfaces/realEstate";
import RealEstate from "../../entities/realEstate";
import { AppDataSource } from "../../data-source";
import { realEstatesSchema } from "../../schemas/realEstate";

const readAllService = async (): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate[] = await realEstateRepository.find({
    relations: {
      address: true,
      category: true,
    },
  });

  return realEstate;
};

export default readAllService;
