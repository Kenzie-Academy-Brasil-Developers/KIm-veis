import { Repository } from "typeorm";
import { TCategorySchema } from "../../interfaces/categories";
import Category from "../../entities/categories";
import { AppDataSource } from "../../data-source";
import { categoriesSchema } from "../../schemas/categories";

const readAllService = async (): Promise<TCategorySchema[]> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Category[] = await categoryRepository.find();
  const returnData: TCategorySchema[] = categoriesSchema.parse(categories);

  return returnData;
};

export default readAllService;
