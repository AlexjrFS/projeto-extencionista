import { Router } from "express"; 
import UserController from "../controller/UserController";

const userRouter = Router();
const userController =  UserController.getInstance();

userRouter.post('/create-user/',userController.saveUser); 
userRouter.post('/login/', userController.loginUser);

userRouter.delete('/apaga-user/:id', userController.deleteUser);

userRouter.put('/alterar-user/:id', userController.updateUser);
userRouter.get('/lista-user/:id_user', userController.getUser);
userRouter.get('/lista-user', userController.getAllUsers);
export default userRouter;

