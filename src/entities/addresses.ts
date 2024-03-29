import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  street: string;

  @Column({ type: "varchar", length: 8 })
  zipCode: string;

  @Column({ type: "varchar", length: 7, nullable: true })
  number: string | undefined | null;

  @Column({ type: "varchar", length: 20 })
  city: string;

  @Column({ type: "varchar", length: 2 })
  state: string;

  @OneToOne(() => RealEstate, (RealEstate) => RealEstate.address)
  real_estate: RealEstate;
}

export default Address;
