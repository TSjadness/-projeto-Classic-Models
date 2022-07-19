import AppError from "../../Utils/AppError";
import Office, { OfficeInput, OfficeOutput } from "../Models/officesModel";


export const getAll = async (): Promise<OfficeOutput[]> => {
    return await Office.findAll();
};

export const getById = async (id: number): Promise<OfficeOutput> => {
    const office = await Office.findByPk(id);

    if (!office) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return office;
};

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
    return await Office.create(payload);
};

export const updateById = async (id: number, payload: OfficeInput): Promise<OfficeOutput> => {
    const office = await Office.findByPk(id);
    if (!office) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return await office.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const office = await Office.findByPk(id);

    if (!office) {
        throw new Error("Registro nao encontrado!");
    }
    return await office.destroy();
}
