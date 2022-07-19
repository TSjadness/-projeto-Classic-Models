import AppError from "../../Utils/AppError";
import Employees, { EmployeesInput, EmployeesOutput } from "../Models/employeesModel";


export const getAll = async (): Promise<EmployeesOutput[]> => {
    return await Employees.findAll();
};

export const getById = async (id: number): Promise<EmployeesOutput> => {
    const employees = await Employees.findByPk(id);

    if (!employees) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return employees;
};

export const create = async (payload: EmployeesInput): Promise<EmployeesOutput> => {
    return await Employees.create(payload);
};

export const updateById = async (id: number, payload: EmployeesInput): Promise<EmployeesOutput> => {
    const employees = await Employees.findByPk(id);
    if (!employees) {
        throw new AppError("NotFoundError ", "Registro nao encontrado!", 404);
    }
    return await employees.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const employees = await Employees.findByPk(id);

    if (!employees) {
        throw new Error("Registro nao encontrado!");
    }
    return await employees.destroy();
}
