import { Request, Response } from "express";
import UserService from "../service/UserService";

export default class UserController{
    private static instance: UserController;

    private constructor(){
    }

    public static getInstance(){
            if(!UserController.instance){
                UserController.instance = new UserController();
            }
            return UserController.instance;
        }
        public async saveUser(req:Request, res:Response): Promise<void>{ 
            try{
                const user = req.body;
                if(!user){
                    res.status(400).json({error: "Dados do alimento não fornecido"});
                }
                const userService = UserService.getInstance();
                const usuarioCriado = await userService.saveUser(user);
                res.status(201).json(usuarioCriado); 
            }
            catch(err){ 
                console.log(err);
                res.status(500).json({err: "Não foi possivel criar usuário"});
            }
        }
        public async deleteUser(req:Request, res:Response): Promise<void>{
            try{
                const userService = UserService.getInstance();
                const id_user = req.params.id_user;
                await userService.deleteUser(id_user);
                res.json("Usuario deletado com sucesso");
            }
            catch(err){
                console.log(err);
                res.status(400).json({err:"Não foi possivel encontrar o usuario"});
            }
        }
        public async updateUser(req:Request, res:Response): Promise<void>{
            try{
                const userService = UserService.getInstance();
                const id_user = req.params.id_user;
                const user = req.body;
                await userService.updateUser((id_user), user);
                res.json("Usuario alterado com sucesso!");
            }
            catch(err){
                console.log(err);
                res.status(400).json({err:"Não foi possivel encontrar o usuario para ser alterado"})
            }
        }

}