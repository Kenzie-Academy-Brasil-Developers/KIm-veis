import { Request, Response } from "express";
import { TUserSchemaReq } from "../interfaces/users";
import { userSchemaReq } from "../schemas/users";
import createService from "../services/users/create";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const data: TUserSchemaReq = userSchemaReq.parse(req.body);
  const returnData = await createService(data);

  return res.status(201).json(returnData);
};

export { createUser };
