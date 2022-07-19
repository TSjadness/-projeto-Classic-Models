import { where } from "sequelize";
import AppError from "../../Utils/AppError";
import Order, { OrderInput, OrderOutput } from "../Models/orderModel";
import Product from "../Models/productsModel"


export const getAll = async (): Promise<OrderOutput[]> => {
    return await Order.findAll();
};

export const getById = async (id: number): Promise<OrderOutput> => {
    const order = await Order.findOne({
        where: {
            orderNumber: id
        },
        include: Product,
    });
   
    if (!order) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return order;
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await Order.create(payload);
};

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
    const order = await Order.findByPk(id);
    if (!order) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return await order.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const order = await Order.findByPk(id);

    if (!order) {
        throw new Error("Registro nao encontrado!");
    }
    return await order.destroy();
}
