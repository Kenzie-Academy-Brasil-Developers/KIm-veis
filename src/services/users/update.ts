import { Repository } from "typeorm";
import { TUserSchemaPart, TUserSchemaRes } from "../../interfaces/users";
import User from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { userSchemaRes } from "../../schemas/users";
import { AppError } from "../../error";

const updateService = async (
  userName: string,
  userAdmin: boolean,
  id: number,
  data: TUserSchemaPart
): Promise<TUserSchemaRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUser: User | null = await userRepository.findOneBy({
    id: id,
  });

  if (userAdmin === false) {
    if (userName !== oldUser?.name) {
      // throw new AppError("Insufficient permission", 403);
    }
  }

  const newUser: User = userRepository.create({
    ...oldUser,
    ...data,
  });

  await userRepository.save(newUser);

  const returnData: TUserSchemaRes = userSchemaRes.parse(newUser);

  return returnData;
};

export default updateService;
