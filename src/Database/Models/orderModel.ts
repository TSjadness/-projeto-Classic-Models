import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import Customer from "./customersModel";

export interface OrderAttributes {
    orderNumber: string;
    orderDate: string;
    requiredDate: string;
    shippedDate: string;
    status: string;
    comments: string;
    customerNumber: string;

};

export interface OrderInput extends Optional< OrderAttributes, "orderNumber"> { };
export interface OrderOutput extends Required< OrderAttributes> { }; //Saída com o objeto completo!

class Order extends Model< OrderAttributes, OrderInput> {
    declare orderNumber:string;
    declare orderDate: string;
    declare requiredDate: string;
    declare shippedDate: string;
    declare status: string;
    declare comments: string;
    declare customerNumber: string;
};

Order.init({
    orderNumber: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    orderDate: { type: DataTypes.DATE, allowNull: false },
    requiredDate: { type: DataTypes.DATE, allowNull: false },
    shippedDate: { type: DataTypes.DATE},
    status: { type: DataTypes.STRING(15), allowNull: false},
    comments: { type: DataTypes.STRING},
    customerNumber: { type: DataTypes.STRING, allowNull: false },

}, {
    sequelize,
    modelName: "orders" //nome da tabela no banco de dados
});

Customer.hasMany(Order,{ foreignKey: "customerNumber" })
Order.belongsTo(Customer, { foreignKey: "customerNumber" });

export default Order;