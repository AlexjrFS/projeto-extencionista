import "reflect-metadata"
import express from "express";
import { AppDataSource } from "./models/DataBase";
import alimentosRouter from "./router/AlimentosRouter";
import receitaRouter from "./router/ReceitaRouter";
// import rece

const app = express();
const port = 38000;
app.use(express.json());

app.use('/gula', alimentosRouter);
app.use('/gula', receitaRouter);
//app.use('/gula', )

app.listen(port,()=>{
    console.log(`Servidor iniciado em http://localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});

