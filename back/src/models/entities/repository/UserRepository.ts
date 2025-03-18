import { AppDataSource } from "../../DataBase";
import Usuario from "../User";

const UserRepository = AppDataSource.getRepository(Usuario);
export default UserRepository;