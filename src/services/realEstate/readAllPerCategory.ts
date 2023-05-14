import { Repository } from "typeorm";
import RealEstate from "../../entities/realEstate";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { IRealEstatePerCategory } from "../../interfaces/realEstate";
import { AppError } from "../../error";

const readAllPerCategoryService = async (
  id: number
): Promise<IRealEstatePerCategory> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate[] = await realEstateRepository.find({
    where: {
      category: {
        id: id,
      },
    },
  });

  if (realEstate.length === 0) {
    throw new AppError("Category not found", 404);
  }

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: {
      id: id,
    },
  });

  const returnData = {
    id: category?.id,
    name: category!.name,
    realEstate: realEstate,
  };

  return returnData;
};

export default readAllPerCategoryService;
