import { Request, Response } from "express";
import { TRealEstateSchemaReq } from "../interfaces/realEstate";
import { realEstateSchemaReq } from "../schemas/realEstate";
import createService from "../services/realEstate/create";
import readAllService from "../services/realEstate/readAll";
import readAllPerCategoryService from "../services/realEstate/readAllPerCategory";

const createRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const returnData = await createService(req.body, res.locals.userAdmin);

  return res.status(201).json(returnData);
};

const readAllRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const returnData = await readAllService();

  return res.json(returnData);
};

const readAllPerCategoryRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  const returnData = await readAllPerCategoryService(id);

  return res.json(returnData);
};

export { createRealEstate, readAllRealEstate, readAllPerCategoryRealEstate };
