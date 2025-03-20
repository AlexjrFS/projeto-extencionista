import { Router } from "express"; 
import UserController from "../controller/UserController";

const userRouter = Router();
const userController =  UserController.getInstance();

userRouter.post('/create-alimentos',userController.saveUser); 

userRouter.delete('/apaga-alimentos/:id', userController.deleteUser);

userRouter.put('/alterar-alimentos/:id', userController.updateUser);
export default userController;

