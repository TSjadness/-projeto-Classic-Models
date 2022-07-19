import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import Customer from "./customersModel";

export interface PaymentsAttributes {
    customerNumber: number;
    checkNumber: string;
    paymentDate: Date;
    amount: number;

};

export interface PaymentsInput extends Optional<PaymentsAttributes, "customerNumber"> { };
export interface PaymentsOutput extends Required<PaymentsAttributes> { }; //Saída com o objeto completo!

class Payments extends Model<PaymentsAttributes, PaymentsInput> {
    declare customerNumber: number;
    declare checkNumber: string;
    declare paymentDate: Date;
    declare amount: number;
};

Payments.init({
    customerNumber: { type: DataTypes.INTEGER, primaryKey: true, },
    checkNumber: { type: DataTypes.STRING(50), allowNull: false },
    paymentDate: { type: DataTypes.DATE, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
}, {
    sequelize,
    modelName: "payments" //nome da tabela no banco de dados
});
Payments.removeAttribute("id");

Customer.hasMany(Payments, {foreignKey: "customerNumber"});
Payments.belongsTo(Customer, {foreignKey: "customerNumber"});

export default Payments;