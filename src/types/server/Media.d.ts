import { Prisma } from "@prisma/client";
import { FileUpload, WithoutFunctions } from "./helpers";
export type MediaType = "video" | "image";
export type MediaPrisma = Prisma.MediaGetPayload<{}>;
export type MediaForm = Omit<WithoutFunctions<Media>, "id" | "url"> & {
    file: FileUpload;
};
export declare class Media {
    id: string;
    url: string;
    type: MediaType;
    position: number;
    width: number;
    height: number;
    constructor(data: MediaPrisma);
}
