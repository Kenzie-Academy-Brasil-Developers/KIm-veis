import { MigrationInterface, QueryRunner } from "typeorm";

export class SchedulesTable1684032414950 implements MigrationInterface {
    name = 'SchedulesTable1684032414950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIMESTAMP NOT NULL`);
    }

}
