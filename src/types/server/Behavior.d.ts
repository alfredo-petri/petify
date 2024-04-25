import { Prisma } from "@prisma/client";
export type BehaviorPrisma = Prisma.BehaviorGetPayload<{}>;
export declare class Behavior {
    id: number;
    name: string;
    description: string | null;
    constructor(data: BehaviorPrisma);
}
