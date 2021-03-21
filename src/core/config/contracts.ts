// Contracts
import { IAuthContract } from '../infrastructure/auth/contract';
import { ICustomerContract } from '../infrastructure/customer/contract';

//API Contracts
import { AuthContract } from '../infrastructure/auth/apiContract';
import { CustomerContract } from '../infrastructure/customer/apiContract';

export interface IContracts {
	authContract: IAuthContract;
	customerContract: ICustomerContract;
}

const contracts: IContracts = {
	authContract: new AuthContract(),
	customerContract: new CustomerContract()
};

export function getContracts(): IContracts {
	return contracts;
}
