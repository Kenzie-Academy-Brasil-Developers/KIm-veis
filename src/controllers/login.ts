import { Request, Response } from "express";
import loginService from "../services/login";

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await loginService(req.body);

  return res.json(returnData);
};

export default loginUser;
