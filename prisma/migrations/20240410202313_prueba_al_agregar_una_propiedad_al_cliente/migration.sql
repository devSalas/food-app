/*
  Warnings:

  - Added the required column `cabro` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Client` ADD COLUMN `cabro` VARCHAR(191) NOT NULL;
