import { Repository } from "typeorm";
import { AppError } from "../../error";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";

const readAllPerRealEstateService = async (
  id: number,
  locals: boolean
): Promise<Schedule[]> => {
  if (locals === false) {
    throw new AppError("Unauthorized request", 401);
  }

  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedule: Schedule[] = await schedulesRepository.find({
    where: {
      realEstate: {
        id: id,
      },
    },
  });

  return schedule;
};
export default readAllPerRealEstateService;
