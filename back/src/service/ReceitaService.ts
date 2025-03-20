import Receitas from "../models/entities/Receita";
import ReceitaRepository from "../models/entities/repository/ReceitaRepository";
import ReceitaIngredientes from "../models/entities/ReceitaIngredientes";
import ReceitaIngredientesRepository from "../models/entities/repository/ReceitaIngredientesRepository";
import Alimentos from "../models/entities/Alimentos";
import AlimentosRepository from "../models/entities/repository/AlimentosRepository";

export default class ReceitaService {
    private static instance: ReceitaService;
    private constructor() {

    }
    public static getInstance(){
        if(!ReceitaService.instance){
            ReceitaService.instance = new ReceitaService();
        }
        return ReceitaService.instance;
    }
    public async criarReceita(nome_receita: string, ingredientes: Array<{
        id_alimento: string;
        quantidade: number;
        unidade_medida: string;
    }>): Promise<Receitas>{
        // Criar a receita
        const receita = new Receitas();
        receita.nome_receita = nome_receita;
        const receitaSalva = await ReceitaRepository.save(receita);
        // Criar os ingredientes da receita
        for(const ingrediente of ingredientes){
            const alimento = await AlimentosRepository.findOneBy({ id_alimento: ingrediente.id_alimento });
            if(!alimento){
                throw new Error(`Alimento com ID ${ingrediente.id_alimento} não encontrado`);
            }
            const receitaIngrediente = new ReceitaIngredientes();
            receitaIngrediente.receita = receitaSalva;
            receitaIngrediente.alimento = alimento;
            receitaIngrediente.quantidade = ingrediente.quantidade;
            receitaIngrediente.unidade_medida = ingrediente.unidade_medida;
            await ReceitaIngredientesRepository.save(receitaIngrediente);
        }
        return receitaSalva;
    }
    public async listarReceitas(): Promise<Receitas[]>{
        return await ReceitaRepository.find({
            relations: ['ingredientes', 'ingredientes.alimento']
        });
    }
    public async buscarReceitaPorId(id_receita: string): Promise<Receitas | null>{
        return await ReceitaRepository.findOne({
            where: { id_receita },
            relations: ['ingredientes', 'ingredientes.alimento']
        });
    }
    public async atualizarReceita(
        id_receita: string,
        nome_receita: string,
        ingredientes: Array<{
            id_alimento: string;
            quantidade: number;
            unidade_medida: string;
        }>
    ): Promise<Receitas | null> {
        const receita = await ReceitaRepository.findOne({
            where: { id_receita },
            relations: ['ingredientes']
        });
        if(!receita){
            return null;
        }
        // Atualizar nome da receita
        receita.nome_receita = nome_receita;
        await ReceitaRepository.save(receita);
        // Remover ingredientes antigos
        await ReceitaIngredientesRepository.delete({ receita: { id_receita } });
        // Adicionar novos ingredientes
        for(const ingrediente of ingredientes){
            const alimento = await AlimentosRepository.findOneBy({ id_alimento: ingrediente.id_alimento });
            if(!alimento){
                throw new Error(`Alimento com ID ${ingrediente.id_alimento} não encontrado`);
            }
            const receitaIngrediente = new ReceitaIngredientes();
            receitaIngrediente.receita = receita;
            receitaIngrediente.alimento = alimento;
            receitaIngrediente.quantidade = ingrediente.quantidade;
            receitaIngrediente.unidade_medida = ingrediente.unidade_medida;
            await ReceitaIngredientesRepository.save(receitaIngrediente);
        }
        return await this.buscarReceitaPorId(id_receita);
    }
    public async deletarReceita(id_receita: string): Promise<boolean>{
        const receita = await ReceitaRepository.findOne({
            where: { id_receita },
            relations: ['ingredientes']
        });
        if(!receita){
            return false;
        }
        // Deletar ingredientes primeiro
        await ReceitaIngredientesRepository.delete({ receita:{id_receita}});
        // Deletar a receita
        await ReceitaRepository.remove(receita);
        return true;
    }
} 