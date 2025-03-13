import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Alimentos from "./Alimentos";

@Entity("receitas")
class Receitas{
    @PrimaryGeneratedColumn("uuid")
    id_receita!: string;

    @ManyToOne(()=>Alimentos)
    @JoinColumn({name:"id_alimento"})
    id_alimento!: Alimentos;
    
    @Column("varchar", { length: 100 })
    nome_receita!: string;
}
export default Receitas;
