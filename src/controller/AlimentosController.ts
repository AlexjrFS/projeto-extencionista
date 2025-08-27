import { Request, Response } from "express";
import AlimentosService from "../service/AlimentosServices";

export default class AlimentoController{
    private static instance: AlimentoController; //criação de instacia referente ao propio controller

    private constructor(){

    }

    public static getInstance(){ // chamada da instancia 
        if(!AlimentoController.instance){
            AlimentoController.instance = new AlimentoController();
        }
        return AlimentoController.instance;
    }
    public async saveAlimento(req:Request, res:Response): Promise<void>{ //salvar um alimento no banco
        try{
            const alimento = req.body;
            if(!alimento){
                res.status(400).json({error: "Dados do alimento não fornecido"});
            }
            const alimentoService = AlimentosService.getInstance();
            const alimentoCriado = await alimentoService.saveAlimentos(alimento);
            res.status(201).json(alimentoCriado); //.json é uma funcao do obj "res" que retorna a resposta pro cliente / 201 ele aponta que criou 
        }
        catch(err){ //caso n de certo, retorna esse erro, (500) é o numero do erro que o computador retorna quando da errado o envio de requisição ao banco
            console.log(err);
            res.status(500).json({err: "Não foi possivel criar o alimento"});
        }
    }
    public async listAlimentos(req:Request, res:Response): Promise<void>{ //listar os alimentos 
        try{
            const alimentoService = AlimentosService.getInstance();
            res.json(await alimentoService.listAlimentos());
        }
        catch(err){
            res.status(500).json({err:"Não foi possivel listar os alimentos do banco de dados"});
        }
    }
    public async listAlimentosID(req: Request, res: Response): Promise<void>{//este também é uma listagem dos alimentos, porém mais especifico, mostrará referente ao id que voce enviar, podemos mudar para o nome tambem
        try{
          const alimentoService = AlimentosService.getInstance();
          const id_alimento = req.params.id_alimento; //chamando o id do AlimentoServicem que vem do Alimentos(declaração das colunas da tabela)
          if(!id_alimento){
            res.status(400).json({err: "ID nao encontrado"});
          }
          res.json(await alimentoService.listAlimentosID(id_alimento)); 
        } 
        catch(err){
          console.log(err);
          res.status(500).json({ err: "Não foi possivel encontrar o alimento" });
        }
      } 
    public async deleteAlimento(req:Request, res:Response): Promise<void>{//deletar um alimento especifico, de inicio manteremos por id pela praticidade
        try{
            const alimentoService = AlimentosService.getInstance();
            const id_alimento = req.params.id_alimento;
            await alimentoService.deleteAlimento(id_alimento);
            res.json("Alimento deletado com sucesso");
        }
        catch(err){
            console.log(err);
            res.status(400).json({err:"Não foi possivel encontrar o alimento"});
        }
    }
    public async updateAlimentos(req:Request, res:Response): Promise<void>{//alterar os descritivos do alimento especifico 
        try{
            const alimentoService = AlimentosService.getInstance();
            const id_alimento = req.params.id_alimento;
            const alimento = req.body;
            await alimentoService.updateAlimentos((id_alimento), alimento);
            res.json("Alimento alterado com sucesso!");
        }
        catch(err){
            console.log(err);
            res.status(400).json({err:"Não foi possivel encontrar o alimento para ser alterado"})
        }
    }
}