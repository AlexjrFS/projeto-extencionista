import { Repository } from "typeorm";
import bcrypt from "bcryptjs";
import User from "../models/entities/User";
import UserRepository from "../models/entities/repository/UserRepository";

export default class UserService{
    private constructor(){

    }
    getUserFromData(id_user:string, user:string, password:string){
        const newUser = new User;
        newUser.id_user = id_user;
        newUser.user = user;
        newUser.password = password;
        return newUser;
    }
    public static instance: UserService;
    public static getInstance(){
        if(!UserService.instance){
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    
    // Método para criptografar senha
    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }
    
    // Método para verificar senha
    public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
    
    public async saveUser(object:User):Promise<User>{
        // Criptografa a senha antes de salvar
        object.password = await this.hashPassword(object.password);
        return await UserRepository.save(object);
    }
    public async deleteUser(id:string):Promise<void>{
        await UserRepository.delete(id);
    }
    public async updateUser(id_user:string, user:User):Promise<void>{
        const userUpdate = await UserRepository.findOneBy({id_user});
        if(userUpdate){
        userUpdate.user = user.user || userUpdate.user;
        // Se uma nova senha foi fornecida, criptografa ela
        if(user.password){
            userUpdate.password = await this.hashPassword(user.password);
        }
        await UserRepository.save(userUpdate);
        }
    }
    public async getUser(id_user:string):Promise<User | null>{
        return await UserRepository.findOneBy({id_user});
    }
    
    public async getAllUsers():Promise<User[]>{
        return await UserRepository.find();
    }
    
    // Método para autenticação de usuário
    public async authenticateUser(username: string, password: string): Promise<User | null> {
        const user = await UserRepository.findOneBy({ user: username });
        if (user && await this.comparePassword(password, user.password)) {
            return user;
        }
        return null;
    }
}