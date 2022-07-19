import { ProductlinesInput, ProductlinesOutput } from "../Database/Models/productlinesModel";
import * as repository from "../Database/Repository/productlinesRepository";

export const getAll = async (): Promise< ProductlinesOutput[]> => {
   return await repository.getAll();
};

export const getById = async (id: number): Promise< ProductlinesOutput> => {
   return await repository.getById(id);
};

export const create = async (payload: ProductlinesInput): Promise < ProductlinesOutput> => {
   return repository.create(payload);
};

export const updateById = async (id: number, payload: ProductlinesInput): Promise< ProductlinesOutput> => {
   return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
   await repository.deleteById(id);
}
