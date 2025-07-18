import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Chef } from "./chef.entity";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => Chef, (chef) => chef.recipes)
    chef!: Chef;
}