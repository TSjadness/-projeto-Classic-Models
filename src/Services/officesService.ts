import { OfficeInput, OfficeOutput } from "../Database/Models/officesModel";
import * as repository from "../Database/Repository/officesRepository";

export const getAll = async (): Promise<OfficeOutput[]> => {
   return await repository.getAll();
};

export const getById = async (id: number): Promise < OfficeOutput> => {
   return await repository.getById(id);
};

export const create = async (payload: OfficeInput): Promise < OfficeOutput> => {
   return repository.create(payload);
};

export const updateById = async (id: number, payload: OfficeInput): Promise < OfficeOutput> => {
   return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
   await repository.deleteById(id);
}
