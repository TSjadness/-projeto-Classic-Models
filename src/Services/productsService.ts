import { ProductsInput, ProductsOutput } from "../Database/Models/productsModel";
import * as repository from "../Database/Repository/productsRepository";

export const getAll = async (): Promise<ProductsOutput[]> => {
   return await repository.getAll();
};

export const getById = async (id: number): Promise<ProductsOutput> => {
   return await repository.getById(id);
};

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
   return repository.create(payload);
};

export const updateById = async (id: number, payload: ProductsInput): Promise<ProductsOutput> => {
   return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
   await repository.deleteById(id);
}
