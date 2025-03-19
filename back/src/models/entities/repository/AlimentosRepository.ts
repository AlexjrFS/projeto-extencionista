import { AppDataSource } from "../../DataBase";
import Alimentos from "../Alimentos";

const AlimentosRepository = AppDataSource.getRepository(Alimentos);
export default AlimentosRepository;