import { NextFunction, Request, Response } from "express";
import AppError from "../../Utils/AppError"
import jwt from "jsonwebtoken";
import {secret} from "../../config/auth.config";

export const ensureIsAutheticade = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        throw new AppError("MissedToken", "O token nao está presente nao requisiçao", 401);
    }

    try {
       jwt.verify(token, secret);
    }catch(err){
        throw new AppError("MissedToken", "O token nao está presente nao requisiçao", 401);
    }
   
    
    next();
};