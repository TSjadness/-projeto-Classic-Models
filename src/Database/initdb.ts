import Order from "./Models/orderModel";
import Office from "./Models/officesModel"
import Customer from "./Models/customersModel";
import Employee from "./Models/employeesModel";
import Orderdetails from "./Models/orderdetailsModel";
import Product from "./Models/productsModel";
import Productline from "./Models/productlinesModel";
import Payment from "./Models/paymentsModel";
import connection from "./sequelize";
import User from "./Models/UserModel";

export const initdb = async () => {
  console.log("Sincronizando...");
  Promise.all([
    await connection(),
    await User.sync({ alter: true }),
    await Office.sync({ alter: true }), //alter: true somente quando o programa esteja em desenvolvimento ou produçao
    await Customer.sync({ alter: true }),
    await Employee.sync({ alter: true }),
    await Order.sync({ alter: true }),
    await Orderdetails.sync({ alter: true }),
    await Product.sync({ alter: true }),
    await Productline.sync({ alter: true }),
    await Payment.sync({ alter: true }),
  ]).then(() => {
    console.log("Tabelas sincronizadas! ");
  })
};


