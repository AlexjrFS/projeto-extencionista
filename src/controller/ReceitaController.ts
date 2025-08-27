import { Request, Response } from "express";
import ReceitaService from "../service/ReceitaService";

export default class ReceitaController {
    private static instance: ReceitaController;

    private constructor() {}

    public static getInstance() {
        if(!ReceitaController.instance){
            ReceitaController.instance = new ReceitaController();
        }
        return ReceitaController.instance;
    }
    public async criarReceita(req: Request, res: Response): Promise<void> {
        try {
            const { nome_receita, ingredientes } = req.body;
            if(!nome_receita || !ingredientes || !Array.isArray(ingredientes)){
                res.status(400).json({ error: "Dados da receita inválidos" });
                return;
            }
            const receitaService = ReceitaService.getInstance();
            const receitaCriada = await receitaService.criarReceita(nome_receita, ingredientes);
            res.status(201).json(receitaCriada);
        } 
        catch(err){
            console.error(err);
            res.status(500).json({ error: "Não foi possível criar a receita" });
        }
    }

    public async listarReceitas(req: Request, res: Response): Promise<void> {
        try {
            const receitaService = ReceitaService.getInstance();
            const receitas = await receitaService.listarReceitas();
            res.status(200).json(receitas);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Não foi possível listar as receitas" });
        }
    }

    public async buscarReceitaPorId(req: Request, res: Response): Promise<void> {
        try {
            const { id_receita } = req.params;
            const receitaService = ReceitaService.getInstance();
            const receita = await receitaService.buscarReceitaPorId(id_receita);

            if (!receita) {
                res.status(404).json({ error: "Receita não encontrada" });
                return;
            }

            res.status(200).json(receita);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Não foi possível buscar a receita" });
        }
    }

    public async atualizarReceita(req: Request, res: Response): Promise<void> {
        try {
            const { id_receita } = req.params;
            const { nome_receita, ingredientes } = req.body;

            if (!nome_receita || !ingredientes || !Array.isArray(ingredientes)) {
                res.status(400).json({ error: "Dados da receita inválidos" });
                return;
            }

            const receitaService = ReceitaService.getInstance();
            const receitaAtualizada = await receitaService.atualizarReceita(
                id_receita,
                nome_receita,
                ingredientes
            );

            if (!receitaAtualizada) {
                res.status(404).json({ error: "Receita não encontrada" });
                return;
            }

            res.status(200).json(receitaAtualizada);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Não foi possível atualizar a receita" });
        }
    }

    public async deletarReceita(req: Request, res: Response): Promise<void> {
        try {
            const { id_receita } = req.params;
            const receitaService = ReceitaService.getInstance();
            const deletada = await receitaService.deletarReceita(id_receita);

            if (!deletada) {
                res.status(404).json({ error: "Receita não encontrada" });
                return;
            }

            res.status(200).json({ message: "Receita deletada com sucesso" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Não foi possível deletar a receita" });
        }
    }
}
