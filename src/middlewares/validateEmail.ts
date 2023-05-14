import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import User from "../entities/users";
import { AppDataSource } from "../data-source";

const validateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.email) {
    throw new AppError("Email is missing", 400);
  }

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default validateEmail;
