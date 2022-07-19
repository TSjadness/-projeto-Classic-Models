import AppError from "../../Utils/AppError";
import Orderdetail, { OrderdetailsInput,OrderdetailsOutput } from "..//Models/orderdetailsModel";



export const getAll = async (): Promise<OrderdetailsOutput[]> => {
    return await Orderdetail.findAll();
};

export const getById = async (id: number): Promise<OrderdetailsOutput> => {
    const orderdetail = await Orderdetail.findByPk(id);

    if (!orderdetail) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return orderdetail;
};

export const create = async (payload: OrderdetailsInput): Promise< OrderdetailsOutput> => {
    return await Orderdetail.create(payload);
};

export const updateById = async (id: number, payload: OrderdetailsInput): Promise<OrderdetailsOutput> => {
    const orderdetail = await Orderdetail.findByPk(id);
    if (!orderdetail) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return await orderdetail.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const orderdetail = await Orderdetail.findByPk(id);

    if (!orderdetail) {
        throw new Error("Registro nao encontrado!");
    }
    return await orderdetail.destroy();
}