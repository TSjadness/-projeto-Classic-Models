import { PaymentsInput, PaymentsOutput } from "../Database/Models/paymentsModel";
import * as repository from "../Database/Repository/paymentsRepository";

export const getAll = async (): Promise< PaymentsOutput[]> => {
   return await repository.getAll();
};

export const getById = async (id: number): Promise< PaymentsOutput> => {
   return await repository.getById(id);
};

export const create = async (payload: PaymentsInput): Promise < PaymentsOutput> => {
   return repository.create(payload);
};

export const updateById = async (id: number, payload: PaymentsInput): Promise< PaymentsOutput> => {
   return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
   await repository.deleteById(id);
}
