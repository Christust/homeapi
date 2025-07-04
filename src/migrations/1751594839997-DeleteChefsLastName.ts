import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteChefsLastName1751594839997 implements MigrationInterface {
    name = 'DeleteChefsLastName1751594839997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chef" DROP COLUMN "last_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chef" ADD "last_name" character varying NOT NULL`);
    }

}
