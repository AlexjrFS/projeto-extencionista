import { Router } from "express";
import AlimentoController from "../controller/AlimentosController";

const alimentosRouter = Router();
const alimentoController =  AlimentoController.getInstance();

alimentosRouter.post('/create-alimentos',alimentoController.saveAlimento); //rota de criação dos alimentos

alimentosRouter.get('/lista-alimentos', alimentoController.listAlimentos);//rota de chamada dos alimentos existentes no banco

alimentosRouter.get('/lista-alimentos/:id', alimentoController.listAlimentosID);//rota de chamada dos alimentos especificos no banco

alimentosRouter.delete('/apaga-alimentos/:id', alimentoController.deleteAlimento);//rota para deletar os alimentos especificos no banco

alimentosRouter.put('/alterar-alimentos/:id', alimentoController.updateAlimentos);//rota para alterar os dados dos alimentos no banco

export default alimentosRouter;

