/*
  Warnings:

  - You are about to drop the column `client_id` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Favorite` DROP FOREIGN KEY `Favorite_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_client_id_fkey`;

-- AlterTable
ALTER TABLE `Favorite` DROP COLUMN `client_id`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `client_id`,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    MODIFY `payment_status` ENUM('EFECTIVO', 'TARJETA', 'YAPE') NOT NULL;

-- AlterTable
ALTER TABLE `Payment` MODIFY `state` ENUM('EFECTIVO', 'TARJETA', 'YAPE') NOT NULL;

-- DropTable
DROP TABLE `Client`;

-- DropTable
DROP TABLE `Notification`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
