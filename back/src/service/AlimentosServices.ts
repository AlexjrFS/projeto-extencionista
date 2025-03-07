import {} from "typeorm";
import Alimentos from "../models/entities/Alimentos";
import AlimentosRepository from "../models/entities/repository/AlimentosRepository";

export default class AlimentosService{
    
    private constructor(){

    }
    getAlimentosFromData(id:number, name:string, categoria:string, peso:number, observacao:string ){
        const newAlimento = new Alimentos;
        newAlimento.id = id;
        newAlimento.name = name;
        newAlimento.categoria = categoria;
        newAlimento.peso = peso;
        newAlimento.observacao = observacao;
        return newAlimento;
    }
    public static instance: AlimentosService;
    public static getInstance(){
        if(!AlimentosService.instance){
            AlimentosService.instance = new AlimentosService();
        }
        return AlimentosService.instance;
    }
    public async saveAlimentos(object:Alimentos):Promise<Alimentos>{
        return await AlimentosRepository.save(object);
    }
    public async listAlimentos():Promise<Alimentos[]>{
        return await AlimentosRepository.find();
    }
    public async listAlimentosID(id:number):Promise<Alimentos | any>{
        const response = await AlimentosRepository.findOneBy({id});
        if(response == null){
            return {erro:"ID na existe"};
        }
        return response;
    }
    public async deleteAlimento(id:number):Promise<void>{
        await AlimentosRepository.delete(id);
    }
    public async updateAlimentos(id:number, alimentos:Alimentos):Promise<void>{
        const alimentoUpdate = await AlimentosRepository.findOneBy(({id}));
        if(alimentoUpdate){
        alimentoUpdate.name = alimentos.name || alimentoUpdate.name;
        alimentoUpdate.categoria = alimentos.categoria || alimentoUpdate.categoria;
        alimentoUpdate.peso = alimentos.peso || alimentoUpdate.peso;
        alimentoUpdate.observacao = alimentos.observacao || alimentoUpdate.observacao;
        await AlimentosRepository.save(alimentoUpdate);
        }
    }
}