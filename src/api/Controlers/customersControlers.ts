import { Request, Response, NextFunction } from "express";
import * as service from "../../Services/customersService";


export const getAll = async (req: Request, res: Response) => {
   const {size, page, sort, order,customerName, ...filters} = req.query;

   const query = {
      size: parseInt(size as string),
      page: parseInt(page as string),
      sort: sort as string,
      order: order as string,
      ...filters
   };

   res.send(await service.getAll(customerName as string, query));

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
   res.status(200).send({
      status: "Sucesso",
      message: "Registro excluido com sucesso!",
      excluded: parseInt(req.params.id)
   });
};
