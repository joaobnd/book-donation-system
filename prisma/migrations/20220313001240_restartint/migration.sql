/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Institution` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Institution" DROP CONSTRAINT "Institution_adminId_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Institution";
