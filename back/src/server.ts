import "reflect-metadata"
import express from "express";
import { AppDataSource, connectDB } from "./database/database";

const app = express();
app.use(express.json());

connectDB();
AppDataSource.initialize()
.then(()=>{
    console.log("Banco de dados cenectado!");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
})
.catch((error)=>console.log("Erro ao conectar o banco: ", error));
  

