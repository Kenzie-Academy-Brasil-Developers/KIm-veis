import { Request, Response } from "express";
import { TUserSchemaPart, TUserSchemaReq } from "../interfaces/users";
import { userSchemaReq } from "../schemas/users";
import createService from "../services/users/create";
import readAllService from "../services/users/readAll";
import updateService from "../services/users/update";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const data: TUserSchemaReq = userSchemaReq.parse(req.body);
  const returnData = await createService(data);

  return res.status(201).json(returnData);
};

const readAllUser = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await readAllService(res.locals.userAdmin);

  return res.json(returnData);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const data: TUserSchemaPart = req.body;
  const returnData = await updateService(
    res.locals.userName,
    res.locals.userAdmin,
    id,
    data
  );

  return res.status(201).json(returnData);
};

export { createUser, readAllUser, updateUser };
