import { AppDataSource } from "../../DataBase";
import Alimentos from "../Alimentos";

const RefeicaoRepository = AppDataSource.getRepository(Alimentos);
export default RefeicaoRepository;