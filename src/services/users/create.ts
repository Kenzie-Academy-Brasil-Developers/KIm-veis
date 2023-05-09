import { Repository } from "typeorm";
import { TUserSchemaReq, TUserSchemaRes } from "../../interfaces/users";
import User from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { userSchemaRes } from "../../schemas/users";

const createService = async (data: TUserSchemaReq): Promise<TUserSchemaRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  data.password = await hash(data.password, 10);

  const user: User = userRepository.create(data);
  await userRepository.save(user);
  const returnData: TUserSchemaRes = userSchemaRes.parse(user);

  return returnData;
};

export default createService;
