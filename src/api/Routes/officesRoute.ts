import express, { Router, Request, Response, NextFunction } from "express";
import * as controller from "../Controlers/officesControlers";
import { OfficeCreateValidation, OfficeUpdateValidation } from "../validations/officesValidation";

const router = Router();

router.get('/', controller.getAll); //chama todos

router.get('/:id', controller.getById);//chama por id

router.post('/',OfficeCreateValidation ,controller.create); //insere novo arquivos

router.put('/:id',OfficeUpdateValidation ,controller.updateById);//atualizar o arquivo por id

router.delete('/:id', controller.deleteById);//deleta o arquivo por id

export default router;