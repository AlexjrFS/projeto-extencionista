import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class Usuario{
    @PrimaryColumn()
    user: string;

    @Column()
    password:string;
}
export default Usuario