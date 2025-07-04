import { MigrationInterface, QueryRunner } from "typeorm";

export class AddChefsLastName1751598249057 implements MigrationInterface {
    name = 'AddChefsLastName1751598249057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chef" ADD "last_name" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chef" DROP COLUMN "last_name"`);
    }

}
