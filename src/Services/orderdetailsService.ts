import { OrderdetailsInput, OrderdetailsOutput } from "../Database/Models/orderdetailsModel";
import * as repository from "../Database/Repository/orderdetailsRepository";

export const getAll = async (): Promise<OrderdetailsOutput[]> => {
   return await repository.getAll();
};

export const getById = async (id: number): Promise < OrderdetailsOutput> => {
   return await repository.getById(id);
};

export const create = async (payload: OrderdetailsInput): Promise < OrderdetailsOutput> => {
   return repository.create(payload);
};

export const updateById = async (id: number, payload: OrderdetailsInput): Promise < OrderdetailsOutput> => {
   return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
   await repository.deleteById(id);
}
