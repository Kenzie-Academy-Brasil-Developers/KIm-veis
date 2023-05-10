import { Request, Response } from "express";
import { TCategorySchemaReq } from "../interfaces/categories";
import { categorySchemaReq } from "../schemas/categories";
import CreateService from "../services/categories/create";

const createCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TCategorySchemaReq = categorySchemaReq.parse(req.body);
  const returnData = await CreateService(data, res.locals.userAdmin);

  return res.status(201).json(returnData);
};

export { createCategory };
