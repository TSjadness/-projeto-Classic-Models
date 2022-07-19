import { OrderInput, OrderOutput } from "../Database/Models/orderModel";
import * as repository from "../Database/Repository/orderRepository";

export const getAll = async (): Promise<OrderOutput[]> => {
   return await repository.getAll();
};

export const getById = async (id: number): Promise<OrderOutput> => {
   return await repository.getById(id);
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
   return repository.create(payload);
};

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
   return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
   await repository.deleteById(id);
}
