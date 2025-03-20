import { DataSource } from "typeorm";
import "dotenv/config";
import Alimentos from "./entities/Alimentos";
import Receitas from "./entities/Receita";
import User from "./entities/User";
import ReceitaIngredientes from "./entities/ReceitaIngredientes";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, 
  logging: true,
  entities: [Alimentos, Receitas, User, ReceitaIngredientes], 
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
export const connectDB = async()=>{
  try{
    await AppDataSource.initialize();
    console.log("🔥 Banco de dados conectado com sucesso!");
  } 
  catch(error){
    console.error("❌ Erro ao conectar no banco de dados:", error);
  }
};

