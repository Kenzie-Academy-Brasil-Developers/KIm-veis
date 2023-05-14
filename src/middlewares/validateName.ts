import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import Category from "../entities/categories";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const validateName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: {
      name: req.body.name,
    },
  });

  if (category) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default validateName;
