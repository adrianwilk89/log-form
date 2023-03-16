/*
  Warnings:

  - Made the column `name` on table `Log` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Log" ALTER COLUMN "name" SET NOT NULL;
