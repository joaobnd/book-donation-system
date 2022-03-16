/*
  Warnings:

  - The primary key for the `UF` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `address` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_siglaUf_fkey";

-- AlterTable
ALTER TABLE "UF" DROP CONSTRAINT "UF_pkey",
ALTER COLUMN "sigla" SET DATA TYPE TEXT,
ADD CONSTRAINT "UF_pkey" PRIMARY KEY ("sigla");

-- AlterTable
ALTER TABLE "address" DROP CONSTRAINT "address_pkey",
ALTER COLUMN "cep" SET DATA TYPE TEXT,
ALTER COLUMN "siglaUf" SET DATA TYPE TEXT,
ADD CONSTRAINT "address_pkey" PRIMARY KEY ("cep");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_siglaUf_fkey" FOREIGN KEY ("siglaUf") REFERENCES "UF"("sigla") ON DELETE RESTRICT ON UPDATE CASCADE;
