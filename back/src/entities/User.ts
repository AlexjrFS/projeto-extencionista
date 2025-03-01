import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 100 }) 
  name!: string;

  @Column("varchar", { unique: true, length: 150 })
  email!: string;
}
