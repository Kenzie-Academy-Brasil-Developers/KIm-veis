import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import Address from "../entities/addresses";
import { AppDataSource } from "../data-source";

const validateAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.address) {
    throw new AppError("Address object is missing", 400);
  }

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

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

  if (!address) {
    throw new AppError("Address not found", 404);
  }

  req.body.addressId = address.id;
  delete req.body.address;

  next();
};

export default validateAddress;
