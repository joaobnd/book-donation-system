/*
  Warnings:

  - You are about to drop the column `userName` on the `admins` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user]` on the table `admins` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user` to the `admins` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "admins_userName_key";

-- AlterTable
ALTER TABLE "admins" DROP COLUMN "userName",
ADD COLUMN     "user" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Institution" (
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "admin" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_user_key" ON "admins"("user");

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_admin_fkey" FOREIGN KEY ("admin") REFERENCES "admins"("user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_address_fkey" FOREIGN KEY ("address") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
