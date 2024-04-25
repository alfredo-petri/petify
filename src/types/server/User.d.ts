import { Prisma } from "@prisma/client";
import { FileUpload, WithoutFunctions } from "./helpers";
import { Address, AddressForm } from "./Address";
import { Media, MediaForm } from "./Media";
import { Pet } from "./Pet";
export declare const user_include: {
    address: true;
    profile_picture: true;
    _count: {
        select: {
            pets: true;
        };
    };
};
export type UserPrisma = Prisma.UserGetPayload<{
    include: typeof user_include;
}>;
export interface UserImageForm {
    id: string;
    image?: FileUpload | null;
    cover?: FileUpload | null;
}
export type UserForm = Omit<WithoutFunctions<User>, "id" | "profile_picture" | "address" | "pets"> & {
    address?: AddressForm;
    profile_picture?: MediaForm;
};
export type PartialUser = Partial<UserForm> & {
    id: string;
};
export type Gender = "male" | "female" | "other" | "undefined";
export declare class User {
    id: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
    name: string;
    birth: string | null;
    gender: Gender | null;
    address: Address | null;
    pets: number;
    profile_picture: Media | null;
    constructor(id: string, user_prisma?: UserPrisma);
    init(): Promise<void>;
    static signup(data: UserForm): Promise<string | User | undefined>;
    load(data: UserPrisma): void;
    update(data: Partial<UserForm>): Promise<string | undefined>;
    updateProfilePicture(data: MediaForm): Promise<void>;
    getPets(): Promise<Pet[]>;
}
