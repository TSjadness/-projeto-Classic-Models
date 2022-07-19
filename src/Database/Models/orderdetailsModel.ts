import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import Order from "./orderModel";
import Products from "./productsModel";
import Customer from "./customersModel";

export interface OrderdetailsAttributes {
    orderNumber: number;
    productCode: string;
    quantityOrdered: number;
    priceEach: number;
    orderLineNumber: number;

};

export interface OrderdetailsInput extends Optional<OrderdetailsAttributes, "orderNumber"> { };
export interface OrderdetailsOutput extends Required<OrderdetailsAttributes> { }; //Saída com o objeto completo!

class Orderdetail extends Model<OrderdetailsAttributes, OrderdetailsInput> {
    declare orderNumber: number;
    declare productCode: string;
    declare quantityOrdered: number;
    declare priceEach: number;
    declare orderLineNumber: number;
};

Orderdetail.init({
    orderNumber: { type: DataTypes.INTEGER, primaryKey: true },
    productCode: { type: DataTypes.STRING(15), primaryKey: true },
    quantityOrdered: { type: DataTypes.INTEGER, allowNull: false },
    priceEach: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    orderLineNumber: { type: DataTypes.SMALLINT, allowNull: false },

}, {
    sequelize,
    modelName: "orderdetails" //nome da tabela no banco de dados
});

Orderdetail.removeAttribute("id");

Customer.hasMany(Order, { foreignKey: "customerNumber" });
Order.belongsToMany(Products, { foreignKey: "orderNumber", through: Orderdetail });
Products.belongsToMany(Order, { foreignKey: "productCode", through: Orderdetail });

export default Orderdetail;