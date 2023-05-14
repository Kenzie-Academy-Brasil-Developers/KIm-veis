import { Repository } from "typeorm";
import { AppError } from "../../error";
import {
  TCategorySchema,
  TCategorySchemaReq,
} from "../../interfaces/categories";
import Category from "../../entities/categories";
import { AppDataSource } from "../../data-source";
import { categorySchema } from "../../schemas/categories";

const CreateService = async (
  data: TCategorySchemaReq,
  locals: boolean
): Promise<TCategorySchema> => {
  if (locals === false) {
    throw new AppError("Insufficient permission", 403);
  }

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(data);
  await categoryRepository.save(category);
  const returnData: TCategorySchema = categorySchema.parse(category);

  return returnData;
};

export default CreateService;
