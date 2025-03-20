import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Alimentos from "./Alimentos";
import Receitas from "./Receita";

@Entity("receita_ingredientes")
class ReceitaIngredientes{
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => Receitas)
    @JoinColumn({name: "id_receita"})
    receita!: Receitas;

    @ManyToOne(() => Alimentos)
    @JoinColumn({name: "id_alimento"})
    alimento!: Alimentos;

    @Column("float")
    quantidade!: number;

    @Column("varchar", {length: 20})
    unidade_medida!: string;
}
export default ReceitaIngredientes; 