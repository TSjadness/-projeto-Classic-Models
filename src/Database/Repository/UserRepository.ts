import AppError from "../../Utils/AppError";
import User, { UserAttributes } from "../Models/UserModel"

export const findByPk = async (email: string): Promise<UserAttributes> => {
  const user = await User.findByPk(email);

  if (!user) {
    throw new AppError("NotFound", "Usuario nao encontrado", 404);
  }

  return user;

};

export const create = async (payload: UserAttributes): Promise<UserAttributes> => {
  const { email } = payload;
  const user = await User.findByPk(email);

  if (!user) {
    throw new AppError("UserConflict", "Usuario ja existente", 409);
  }

  return await User.create(payload);
};
export function findById(email: string) {
  throw new Error("Function not implemented.");
}

