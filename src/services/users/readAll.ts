import { Repository } from "typeorm";
import { TUserSchemaRes } from "../../interfaces/users";
import User from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { usersSchema } from "../../schemas/users";

const readAllService = async (locals: boolean): Promise<TUserSchemaRes[]> => {
  if (locals === false) {
    throw new AppError("Insufficient permission", 403);
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();
  const returnData: TUserSchemaRes[] = usersSchema.parse(users);

  return returnData;
};

export default readAllService;
