import { Prisma } from "@prisma/client";
import { Behavior } from "./Behavior";
import { Diet } from "./Diet";
import { Media } from "./Media";
export type Sex = "male" | "female" | "undefined";
export declare const pet_include: {
    behaviors: true;
    diet_preferred: true;
    diet_restriction: true;
    gallery: true;
    profile_picture: true;
    schedules: {
        include: {
            provider: true;
            service: true;
        };
    };
    user: true;
};
export type PetPrisma = Prisma.PetGetPayload<{
    include: typeof pet_include;
}>;
export declare class Pet {
    id: string;
    name: string;
    species: string | null;
    breed: string | null;
    birth: string | null;
    weight: string | null;
    color: string | null;
    sex: Sex | null;
    diet_restriction: Diet[];
    diet_preferred: Diet[];
    behaviors: Behavior[];
    emergency_contact: string | null;
    profile_picture: Media | null;
    gallery: Media[];
    constructor(id: string, data?: PetPrisma);
    init(): Promise<void>;
    load(data: PetPrisma): void;
}
