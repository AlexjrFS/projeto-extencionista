import { z } from "zod";

export default interface ReceitaDto{
    id_receita: string;
    id_alimento: string;
    nome_receita: string;
}
export const ReceitaSchema = z.object({
    id_receita: z.string(),
    id_alimento: z.string(),
    nome_receita: z.string()
})