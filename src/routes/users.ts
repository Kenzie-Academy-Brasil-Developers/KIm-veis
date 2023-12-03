import { Router } from "express";
import {
  createUser,
  deleteUser,
  readAllUser,
  updateUser,
} from "../controllers/users";
import validateEmail from "../middlewares/validateEmail";
import validateToken from "../middlewares/validateToken";
import validateId from "../middlewares/validateId";
import validateData from "../middlewares/validateData";
import { userSchemaPart, userSchemaReq } from "../schemas/users";

const userRoutes: Router = Router();

userRoutes.post("", validateEmail, validateData(userSchemaReq), createUser);
userRoutes.get("", validateToken, readAllUser);
userRoutes.patch(
  "/:id",
  validateId,
  validateToken,
  validateData(userSchemaPart),
  updateUser
);
userRoutes.delete("/:id", validateId, validateToken, deleteUser);

export default userRoutes;
