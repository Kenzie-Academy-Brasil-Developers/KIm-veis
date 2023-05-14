import { Repository } from "typeorm";
import User from "../../entities/users";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const deleteService = async (id: number, locals: boolean): Promise<void> => {
  if (locals === false) {
    throw new AppError("Insufficient permission", 403);
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  await userRepository.softRemove(user!);

  return;
};

export default deleteService;
