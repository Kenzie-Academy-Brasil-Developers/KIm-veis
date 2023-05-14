import { Repository } from "typeorm";
import {
  TScheduleSchema,
  TScheduleSchemaReq,
} from "../../interfaces/schedules";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { scheduleSchema } from "../../schemas/schedules";

const createService = async (
  data: TScheduleSchemaReq
): Promise<TScheduleSchema> => {
  console.log(data);

  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedule: Schedule = scheduleRepository.create(data);
  await scheduleRepository.save(schedule);
  const returnData: TScheduleSchema = scheduleSchema.parse(schedule);

  return returnData;
};
export default createService;
