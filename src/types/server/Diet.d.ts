import { Prisma } from "@prisma/client";
export type DietPrisma = Prisma.DietGetPayload<{}>;
export declare class Diet {
    id: number;
    name: string;
    quantity: string | null;
    interval: string | null;
    notes: string | null;
    constructor(data: DietPrisma);
}
