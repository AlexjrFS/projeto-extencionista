import {} from "typeorm";
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
    public async saveUser(object:User):Promise<User>{
        return await UserRepository.save(object);
    }
    public async deleteUser(id:string):Promise<void>{
        await UserRepository.delete(id);
    }
    public async updateUser(id_user:string, user:User):Promise<void>{
        const userUpdate = await UserRepository.findOneBy(({id_user}));
        if(userUpdate){
        userUpdate.user = user.user || userUpdate.user;
        userUpdate.user = user.password || userUpdate.password;
        await UserRepository.save(userUpdate);
        }
    }
}