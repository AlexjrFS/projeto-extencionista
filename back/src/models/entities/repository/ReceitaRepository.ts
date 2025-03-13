import { AppDataSource } from "../../DataBase";
import Receitas from "../Receita";

const ReceitaRepository = AppDataSource.getRepository(Receitas);
export default ReceitaRepository;