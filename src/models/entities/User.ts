import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id_user!: string;

    @Column("varchar", { length: 100 })
    user!: string;

    @Column("varchar", { length: 100 })
    password!: string;
}

export default User;