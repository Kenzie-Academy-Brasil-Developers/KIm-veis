import { Repository } from "typeorm";
import { IToken, TLoginSchema } from "../interfaces/login";
import User from "../entities/users";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (data: TLoginSchema): Promise<IToken> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      name: user.name,
      admin: user.admin,
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  const message = {
    token: token,
  };

  return message;
};

export default loginService;
