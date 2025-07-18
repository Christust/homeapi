import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Recipe } from "./recipe.entity";

@Entity()
export class Chef {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  last_name!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.chef)
  recipes!: Recipe[];
}
