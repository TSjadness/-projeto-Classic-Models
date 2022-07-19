import express, { Application, Express, NextFunction, Request, Response } from "express";
import { errors } from 'celebrate';

import bodyParser from "body-parser"
import routes from "./api/Routes/index";
import AppError from "./Utils/AppError";
import "express-async-errors";
import { initdb } from "./Database/initdb";

const app: Application = express();
const port = 1803;

app.use(bodyParser.json());

app.use('/api/v1', routes);


app.get('/', (req: Request, res: Response) => {
  res.send("Classic models !!! ")
});

app.use(errors());

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  try {
    res.status(err.getHttpCode()).send(err.getError());
  } catch (error) {
    const appError = new AppError("InternalServerError ", "Erro interno do servidor!", 500);
    res.status(500).send(err.getError());
  }
});

app.listen(port, () => {
  console.log("Conectado na porta " + port);
});


initdb();