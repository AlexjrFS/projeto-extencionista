import { AppDataSource } from "../../DataBase";
import User from "../User";

const UserRepository = AppDataSource.getRepository(User);
export default UserRepository;