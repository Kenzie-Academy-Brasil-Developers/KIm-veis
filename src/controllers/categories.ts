import { Request, Response } from "express";
import { TCategorySchemaReq } from "../interfaces/categories";
import { categorySchemaReq } from "../schemas/categories";
import CreateService from "../services/categories/create";
import readAllService from "../services/categories/readAll";

const createCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const returnData = await CreateService(req.body, res.locals.userAdmin);

  return res.status(201).json(returnData);
};

const readAllCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const returnData = await readAllService();

  return res.json(returnData);
};

export { createCategory, readAllCategory };
