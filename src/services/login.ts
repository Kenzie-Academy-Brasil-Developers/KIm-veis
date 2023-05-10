import { Repository } from "typeorm";
import TLoginSchema from "../interfaces/login";
import User from "../entities/users";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (data: TLoginSchema): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new AppError("Wrong email/password", 401);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email/password", 401);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(user.admin),
  });

  return token;
};

export default loginService;
