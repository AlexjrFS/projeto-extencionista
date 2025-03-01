import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, 
  logging: true,
  entities: [User], 
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

