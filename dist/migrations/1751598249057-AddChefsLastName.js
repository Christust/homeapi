"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddChefsLastName1751598249057 = void 0;
class AddChefsLastName1751598249057 {
    constructor() {
        this.name = 'AddChefsLastName1751598249057';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "chef" ADD "last_name" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "chef" DROP COLUMN "last_name"`);
    }
}
exports.AddChefsLastName1751598249057 = AddChefsLastName1751598249057;
