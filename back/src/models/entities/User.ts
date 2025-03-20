import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryColumn("varchar", { length: 36 })
    id_user: string;

    @Column("varchar", { length: 100 })
    user: string;

    @Column("varchar", { length: 100 })
    password: string;
}

export default User;