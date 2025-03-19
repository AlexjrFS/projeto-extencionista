import { z } from "zod";

export default interface AlimentosDto{
    name:string;
    categoria:string;
    peso:number;
    observacao:string;
}
export const AlimentosSchema = z.object({
    name:z.string(),
    categoria:z.string(),
    peso:z.number(),
    observacao:z.string().nullable()
})