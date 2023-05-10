import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import User from "../entities/users";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const validateId = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default validateId;
