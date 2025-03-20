import { Router } from "express";
import ReceitaController from "../controller/ReceitaController";
import axios from "axios";

const router = Router();
const receitaController = ReceitaController.getInstance();

// Criar uma nova receita
router.post("/receitas", (req, res) => receitaController.criarReceita(req, res));

// Listar todas as receitas
router.get("/receitas", (req, res) => receitaController.listarReceitas(req, res));

// Buscar uma receita específica
router.get("/receitas/:id_receita", (req, res) => receitaController.buscarReceitaPorId(req, res));

// Atualizar uma receita
router.put("/receitas/:id_receita", (req, res) => receitaController.atualizarReceita(req, res));

// Deletar uma receita
router.delete("/receitas/:id_receita", (req, res) => receitaController.deletarReceita(req, res));

export default router; 