import express, { Router, Request, Response, NextFunction } from "express";
import * as controller from "../Controlers/productsControlers";
import { ProductsCreateValidation, ProductsUpdateValidation } from "../validations/productsValidation";

const router = Router();

router.get('/', controller.getAll); //chama todos

router.get('/:id', controller.getById);//chama por id

router.post('/', ProductsCreateValidation, controller.create); //insere novo arquivosrc/api/Routes/customerRoute.ts

router.put('/:id', ProductsUpdateValidation, controller.updateById);//atualizar o arquivo por id

router.delete('/:id', controller.deleteById);//deleta o arquivo por id

export default router;