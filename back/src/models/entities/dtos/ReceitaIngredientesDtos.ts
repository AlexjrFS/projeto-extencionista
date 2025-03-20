import { z } from "zod";

export default interface ReceitaIngredientesDto{
    id_receita: string;
    id_alimento: string;
    quantidade: number;
    unidade_medida: string;
}

export const ReceitaIngredientesSchema = z.object({
    id_receita: z.string(),
    id_alimento: z.string(),
    quantidade: z.number(),
    unidade_medida: z.string()
}); 