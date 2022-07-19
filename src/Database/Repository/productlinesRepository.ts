import AppError from "../../Utils/AppError";
import Productlines from "../Models/productlinesModel";
import Productline, {ProductlinesInput, ProductlinesOutput } from "../Models/productlinesModel";


export const getAll = async (): Promise<ProductlinesOutput[]> => {
    return await Productline.findAll();
};

export const getById = async (id: number): Promise<ProductlinesOutput> => {
    const productline = await Productline.findByPk(id);

    if (!productline) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return productline;
};

export const create = async (payload: ProductlinesInput): Promise<ProductlinesOutput> => {
    return await Productlines.create(payload);
};

export const updateById = async (id: number, payload: ProductlinesInput): Promise< ProductlinesOutput> => {
    const productline = await Productline.findByPk(id);
    if (!productline) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return await productline.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const productline = await Productline.findByPk(id);

    if (!productline) {
        throw new Error("Registro nao encontrado!");
    }
    return await productline.destroy();
}
