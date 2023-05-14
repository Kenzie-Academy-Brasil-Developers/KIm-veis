import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate";
import User from "./users";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date | string;

  @Column({ type: "time" })
  hour: Date | number;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}

export default Schedule;
