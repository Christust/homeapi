import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChefs1751594765074 implements MigrationInterface {
    name = 'CreateChefs1751594765074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chef" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, CONSTRAINT "PK_3a93de538106ed8602e2d04bbe5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "chef"`);
    }

}
