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
                    res.status(400).json({error: "Dados do usuario não fornecido"});
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
        public async getUser(req:Request, res:Response): Promise<void>{
            try{
                const userService = UserService.getInstance();
                const id_user = req.params.id_user;
                const user = await userService.getUser(id_user);
                res.json(user);
            }
            catch(err){
                console.log(err);
                res.status(400).json({err:"Não foi possivel encontrar o usuario"});
            }
        }
        public async getAllUsers(req:Request, res:Response): Promise<void>{
            try{
                const userService = UserService.getInstance();
                const users = await userService.getAllUsers();
                res.json(users);
            }
            catch(err: any){
                console.log(err);
                res.status(400).json({err:"Não foi possível encontrar os usuários"});
            }
        }
        
        public async loginUser(req:Request, res:Response): Promise<void>{
            try{
                const { user, password } = req.body;
                if(!user || !password){
                    res.status(400).json({error: "Usuário e senha são obrigatórios"});
                    return;
                }
                
                const userService = UserService.getInstance();
                const authenticatedUser = await userService.authenticateUser(user, password);
                
                if(authenticatedUser){
                    res.status(200).json({
                        message: "Login realizado com sucesso",
                        user: {
                            id: authenticatedUser.id_user,
                            username: authenticatedUser.user
                        }
                    });
                } else {
                    res.status(401).json({error: "Credenciais inválidas"});
                }
            }
            catch(err){
                console.log(err);
                res.status(500).json({err: "Erro interno do servidor"});
            }
        }
}