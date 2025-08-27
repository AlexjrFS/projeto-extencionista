import "reflect-metadata"
import express from "express";
import { AppDataSource } from "./models/DataBase";
import alimentosRouter from "./router/AlimentosRouter";
import receitaRouter from "./router/ReceitaRouter";
import userRouter from "./router/UserRouter";
import cors from "cors";
// import rece

const app = express();
const port = 38000;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use('/gula', alimentosRouter);
app.use('/gula', receitaRouter);
app.use('/gula/user', userRouter);
//app.use('/gula', )

app.listen(port,()=>{
    console.log(`Servidor iniciado em http://localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});

