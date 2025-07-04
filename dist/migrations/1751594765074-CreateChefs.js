"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChefs1751594765074 = void 0;
class CreateChefs1751594765074 {
    constructor() {
        this.name = 'CreateChefs1751594765074';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "chef" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "last_name" character varying NOT NULL, CONSTRAINT "PK_3a93de538106ed8602e2d04bbe5" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "chef"`);
    }
}
exports.CreateChefs1751594765074 = CreateChefs1751594765074;
