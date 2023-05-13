import { Repository } from "typeorm";
import RealEstate from "../../entities/realEstate";
import { AppDataSource } from "../../data-source";

const readAllPerCategoryService = async (id: number): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate[] = await realEstateRepository.find({
    where: {
      category: {
        id: id,
      },
    },
  });

  return realEstate;
};

export default readAllPerCategoryService;
