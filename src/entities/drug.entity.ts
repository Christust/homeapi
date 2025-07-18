import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Disease } from "./disease.entity";

@Entity()
export class Drug {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToMany(() => Disease)
    @JoinTable()
    diseases!: Disease[];
}