import { Repository } from "typeorm";
import { TUserSchemaPart, TUserSchemaRes } from "../../interfaces/users";
import User from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { userSchemaRes } from "../../schemas/users";
import { hash } from "bcryptjs";
import { Locals } from "express-serve-static-core";
import { AppError } from "../../error";

const updateService = async (
  locals: Record<string, any> & Locals,
  id: number,
  data: TUserSchemaPart
): Promise<TUserSchemaRes> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUser: User | null = await userRepository.findOneBy({
    id: id,
  });

  if (oldUser?.email !== locals.userEmail && !locals.userAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  if (data.password) {
    data.password = await hash(data.password, 10);
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
