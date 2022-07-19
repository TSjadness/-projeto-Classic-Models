import { UserAttributes } from "../Database/Models/UserModel";
import * as repository from "../Database/Repository/UserRepository";
import AppError from "../Utils/AppError";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { secret } from "../config/auth.Config"

export const singUp = async ({email,password}: UserAttributes): Promise<{email: string}> => {
  password = bcrypt.hash(password,10);
 
  const user = await await repository.create({email,password})

  return {email: user.email}
};

export const singIn = async ({ email,password }: UserAttributes): Promise<{token: string}> => {
  const token = jwt.sign({email: email}, secret, 
    { expiresIn: '24h'}
  );

  try{
    const user = await repository.findById(email);

    if (bcrypt.compareSync(password, user.password)) {
        return {token : token};
      
      } else {
        throw new Error;
    }
  
  } catch (error) {
    throw new AppError("Unauthorized", "Usuario e/ou senha estao incorretos", 401);
  }

};