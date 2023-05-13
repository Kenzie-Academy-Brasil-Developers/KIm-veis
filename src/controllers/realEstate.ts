import { Request, Response } from "express";
import { TRealEstateSchemaReq } from "../interfaces/realEstate";
import { realEstateSchemaReq } from "../schemas/realEstate";
import createService from "../services/realEstate/create";

const createRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TRealEstateSchemaReq = realEstateSchemaReq.parse(req.body);

  const returnData = await createService(data, res.locals.userAdmin);
  console.log(returnData);

  return res.status(201).json(returnData);
};

export { createRealEstate };
