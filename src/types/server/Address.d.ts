import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
export type AddressPrisma = Prisma.AddressGetPayload<{}>;
export type AddressForm = Omit<WithoutFunctions<Address>, "id">;
export declare class Address {
    id: number;
    street: string;
    number: string;
    district: string;
    complement: string | null;
    city: string;
    uf: string;
    postcode: string;
    constructor(data: AddressPrisma);
}
