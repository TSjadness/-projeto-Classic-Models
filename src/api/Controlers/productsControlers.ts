import { Request, Response, NextFunction } from "express";
import { ProductsInput, ProductsOutput } from "../../Database/Models/productsModel";
import * as service from "../../Services/productsService";

export const getAll = async (req: Request, res: Response) => {
   res.send(await service.getAll());
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
   try {
      res.send(await service.getById(parseInt(req.params.id)));
   } catch (error) {
      next(error)
   }
};

export const create = async (req: Request, res: Response) => {
   res.status(201).send(await service.create(req.body));
};

export const updateById = async (req: Request, res: Response) => {
   res.send(await service.updateById(parseInt(req.params.id), req.body));
};

export const deleteById = async (req: Request, res: Response) => {
   await service.deleteById(parseInt(req.params.id));
   res.status(204).send();
};
function limi(limi: any): any {
   throw new Error("Function not implemented.");
}

