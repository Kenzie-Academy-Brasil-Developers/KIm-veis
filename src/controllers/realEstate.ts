import { Request, Response } from "express";
import { TRealEstateSchemaReq } from "../interfaces/realEstate";
import { realEstateSchemaReq } from "../schemas/realEstate";
import createService from "../services/realEstate/create";
import readAllService from "../services/realEstate/readAll";

const createRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TRealEstateSchemaReq = realEstateSchemaReq.parse(req.body);

  const returnData = await createService(data, res.locals.userAdmin);

  return res.status(201).json(returnData);
};

const readAllRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const returnData = await readAllService();

  return res.json(returnData);
};

export { createRealEstate, readAllRealEstate };
