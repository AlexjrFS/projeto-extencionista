import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity("alimentos")
class Alimentos{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column("varchar", { length: 100 })
    name!: string;

    @Column("varchar", {length: 50})
    categoria!: string;

    @Column("float")
    peso!: number;

    @Column("varchar", {nullable:true})
    observacao?: string;
}
export default Alimentos;
