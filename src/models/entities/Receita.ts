import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import ReceitaIngredientes from "./ReceitaIngredientes";

@Entity("receitas")
class Receitas {
    @PrimaryGeneratedColumn("uuid")
    id_receita!: string;
    
    @Column("varchar", { length: 100 })
    nome_receita!: string;  

    @OneToMany(() => ReceitaIngredientes, receitaIngrediente => receitaIngrediente.receita)
    ingredientes!: ReceitaIngredientes[];
}

export default Receitas;
