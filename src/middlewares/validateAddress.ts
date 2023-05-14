import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import Address from "../entities/addresses";
import { AppDataSource } from "../data-source";
import RealEstate from "../entities/realEstate";

const validateAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      address: req.body.address,
    },
  });
  if (realEstate) {
    throw new AppError("Real Estate alredy linked to an address", 403);
  }

  let address: Address | null;
  if (req.body.address.number) {
    address = await addressRepository.findOne({
      where: {
        street: req.body.address.street,
        zipCode: req.body.address.zipCode,
        number: req.body.address.number,
        city: req.body.address.city,
        state: req.body.address.state,
      },
    });
  } else {
    address = await addressRepository.findOne({
      where: {
        street: req.body.address.street,
        zipCode: req.body.address.zipCode,
        city: req.body.address.city,
        state: req.body.address.state,
      },
    });
  }

  req.body.address = address!.id;

  next();
};

export default validateAddress;
