import express, { Router, Request, Response, NextFunction } from "express";
import * as controller from "../Controlers/productlinesControlers";
import { ProductlinesCreateValidation, ProductlinesUpdateValidation } from "../validations/productlinesValidation";

const router = Router();

router.get('/', controller.getAll); //chama todos

router.get('/:id', controller.getById);//chama por id

router.post('/', ProductlinesCreateValidation, controller.create); //insere novo arquivosrc/api/Routes/customerRoute.ts

router.put('/:id', ProductlinesUpdateValidation, controller.updateById);//atualizar o arquivo por id

router.delete('/:id', controller.deleteById);//deleta o arquivo por id

export default router;