import { AppDataSource } from "../../DataBase";
import ReceitaIngredientes from "../ReceitaIngredientes";

const ReceitaIngredientesRepository = AppDataSource.getRepository(ReceitaIngredientes);

export default ReceitaIngredientesRepository; 