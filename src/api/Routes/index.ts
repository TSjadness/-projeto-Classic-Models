import { Router } from "express";


import Customer from "./customerRoute";
import Employee from "./employeesRoutes";
import Office from "./officesRoute";
import Order from "./orderRoutes";
import Orderdetail from "./orderdetailsRoutes";
import Product from "./productsRoute";
import Productsline from "./productlinesRoute";
import Payment from "./paymentsRoute";
import router from "./AuthRoute";
import authRouter from "./AuthRoute";
import { ensureIsAutheticade } from "../middleware/AuthMiddleware";

const routes = Router();


router.use(ensureIsAutheticade); 

routes.use('/customers', Customer);
routes.use('/employees', Employee);
routes.use('/orders', Order);
routes.use('/offices', Office);
routes.use('/orderdetails', Orderdetail);
routes.use('/Products', Product);
routes.use('/Productslines', Productsline);
routes.use('/Payments', Payment);
router.use('/auth',authRouter);

export default routes;