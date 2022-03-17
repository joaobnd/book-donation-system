/*
  Warnings:

  - The primary key for the `UF` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `sigla` on the `UF` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(2)`.
  - You are about to alter the column `estado` on the `adresses` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(2)`.

*/
-- DropForeignKey
ALTER TABLE "adresses" DROP CONSTRAINT "adresses_estado_fkey";

-- AlterTable
ALTER TABLE "UF" DROP CONSTRAINT "UF_pkey",
ALTER COLUMN "sigla" SET DATA TYPE CHAR(2),
ADD CONSTRAINT "UF_pkey" PRIMARY KEY ("sigla");

-- AlterTable
ALTER TABLE "adresses" ALTER COLUMN "estado" SET DATA TYPE CHAR(2);

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_estado_fkey" FOREIGN KEY ("estado") REFERENCES "UF"("sigla") ON DELETE RESTRICT ON UPDATE CASCADE;
