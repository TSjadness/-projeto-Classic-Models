import { Op } from "sequelize";
import { Query } from "../../shared/types/pagination";
import AppError from "../../Utils/AppError";
import { getPagination } from "../../Utils/getPagination";
import Customer, { CustomerInput, CustomerOutput } from "../Models/customersModel";

import Order from "../Models/orderModel"

export const getAll = async (customerName: string,query: Query): Promise<{ rows: CustomerOutput[], count: number }> => {
    let { size, page, sort, order, ...filters } = query;
    
    const id = "customerNumber";
    const {...pagination} = getPagination(id,query);
    
    if(!customerName) "customerName";
    return await Customer.findAndCountAll({
      where:{
        customerName:{ [Op.like]: `${customerName}%` },
        ...filters
        //contactLastName: "Thompson",
      },
        ...pagination
      
    });
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    //const customer = await Customer.findByPk(id);
    const customer = await Customer.findOne({
        where: {
            customerNumber: id,
        },
        include: Order,
    });

    if (!customer) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return customer;
};

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await Customer.create(payload);
};

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    const customer = await Customer.findByPk(id);
    if (!customer) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return await customer.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const customer = await Customer.findByPk(id);

    if (!customer) {
        throw new Error("Registro nao encontrado!");
    }
    return await customer.destroy();
}
