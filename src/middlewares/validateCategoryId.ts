import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import Category from "../entities/categories";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

const validateCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: {
      id: req.body.categoryId,
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  next();
};

export default validateCategoryId;
