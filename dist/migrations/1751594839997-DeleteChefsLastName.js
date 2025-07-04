"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteChefsLastName1751594839997 = void 0;
class DeleteChefsLastName1751594839997 {
    constructor() {
        this.name = 'DeleteChefsLastName1751594839997';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "chef" DROP COLUMN "last_name"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "chef" ADD "last_name" character varying NOT NULL`);
    }
}
exports.DeleteChefsLastName1751594839997 = DeleteChefsLastName1751594839997;
