import { Repository } from "typeorm";
import { AppError } from "../../error";
import {
  TRealEstateSchema,
  TRealEstateSchemaReq,
} from "../../interfaces/realEstate";
import RealEstate from "../../entities/realEstate";
import { AppDataSource } from "../../data-source";
import { realEstateSchema } from "../../schemas/realEstate";
import Address from "../../entities/addresses";
import Category from "../../entities/categories";

const createService = async (
  data: TRealEstateSchemaReq,
  locals: boolean
): Promise<TRealEstateSchema> => {
  if (locals === false) {
    throw new AppError("Unauthorized request", 401);
  }

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const address: Address | null = await addressRepository.findOne({
    where: {
      id: data.addressId,
    },
  });
  const category: Category | null = await categoryRepository.findOne({
    where: {
      id: data.categoryId,
    },
  });

  if (!address || !category) {
    throw new AppError("Address or category not found", 404);
  }

  const realEstate: RealEstate = realEstateRepository.create({
    value: data.value,
    size: data.size,
    address: address,
    category: category,
  });
  await realEstateRepository.save(realEstate);

  const newData = {
    ...realEstate,
    addressId: address.id,
    categoryId: category.id,
  };
  newData.value = Number(newData.value);

  const returnData: TRealEstateSchema = realEstateSchema.parse(newData);
  console.log(returnData);

  return returnData;
};

export default createService;
