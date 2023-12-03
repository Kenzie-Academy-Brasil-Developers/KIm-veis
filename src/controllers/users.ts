import { Request, Response } from "express";
import { TUserSchemaPart } from "../interfaces/users";
import createService from "../services/users/create";
import readAllService from "../services/users/readAll";
import updateService from "../services/users/update";
import deleteService from "../services/users/delete";
import { userPartial, userSchemaPart } from "../schemas/users";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await createService(req.body);

  return res.status(201).json(returnData);
};

const readAllUser = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await readAllService(res.locals.userAdmin);

  return res.json(returnData);
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  const returnData = await updateService(res.locals, id, req.body);

  return res.status(200).json(returnData);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  await deleteService(id, res.locals.userAdmin);

  return res.status(204).json();
};

export { createUser, readAllUser, updateUser, deleteUser };
