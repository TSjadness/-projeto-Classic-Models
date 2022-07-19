import express, { Router, Request, Response, NextFunction } from "express";
import * as controller from "../Controlers/employeesControlers";
import { EmployeeCreateValidation, EmployeeUpdateValidation } from "../validations/employeesValidation";

const router = Router();

router.get('/', controller.getAll); //chama todos

router.get('/:id', controller.getById);//chama por id

router.post('/',EmployeeCreateValidation ,controller.create); //insere novo arquivos

router.put('/:id',EmployeeUpdateValidation ,controller.updateById);//atualizar o arquivo por id

router.delete('/:id', controller.deleteById);//deleta o arquivo por id

export default router;