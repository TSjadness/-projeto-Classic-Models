import express, { Router, Request, Response, NextFunction } from "express";
import * as controller from "../Controlers/orderControlers";
import { OrderCreateValidation, OrderUpdateValidation } from "../validations/orderValidation";

const router = Router();

router.get('/', controller.getAll); //chama todos

router.get('/:id', controller.getById);//chama por id

router.post('/',OrderCreateValidation ,controller.create); //insere novo arquivos

router.put('/:id',OrderUpdateValidation ,controller.updateById);//atualizar o arquivo por id

router.delete('/:id', controller.deleteById);//deleta o arquivo por id

export default router;