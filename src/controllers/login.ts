import { Request, Response } from "express";
import TLoginSchema from "../interfaces/login";
import loginSchema from "../schemas/login";
import loginService from "../services/login";

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const data: TLoginSchema = loginSchema.parse(req.body);
  const returnData = await loginService(data);

  return res.json(returnData);
};

export default loginUser;
