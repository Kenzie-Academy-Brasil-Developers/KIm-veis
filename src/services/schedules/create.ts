import { Repository } from "typeorm";
import {
  TScheduleSchema,
  TScheduleSchemaReq,
} from "../../interfaces/schedules";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { scheduleSchema } from "../../schemas/schedules";
import { AppError } from "../../error";

const createService = async (
  data: TScheduleSchemaReq
): Promise<TScheduleSchema> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: data.realEstateId,
    },
  });

  if (!realEstate) {
    throw new AppError("Real Estate not found", 404);
  }

  const schedule: Schedule = scheduleRepository.create({
    date: data.date,
    hour: data.hour,
    realEstate: realEstate,
  });

  await scheduleRepository.save(schedule);

  const newData = {
    id: schedule.id,
    date: schedule.date,
    hour: schedule.hour,
    realEstateId: realEstate.id,
  };

  const returnData: TScheduleSchema = scheduleSchema.parse(newData);

  return returnData;
};
export default createService;
