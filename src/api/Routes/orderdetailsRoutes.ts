import express, { Router, Request, Response, NextFunction } from "express";
import * as controller from "../Controlers/orderdetailsControlers";
import { OrderdetailsCreateValidation, OrderdetailsUpdateValidation } from "../validations/orderdetailsValidation";

const router = Router();

router.get('/', controller.getAll); //chama todos

router.get('/:id', controller.getById);//chama por id

router.post('/',OrderdetailsCreateValidation ,controller.create); //insere novo arquivos

router.put('/:id',OrderdetailsUpdateValidation ,controller.updateById);//atualizar o arquivo por id

router.delete('/:id', controller.deleteById);//deleta o arquivo por id

export default router;