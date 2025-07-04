import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Chef {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

     @Column({nullable: true})
    last_name!: string
}

