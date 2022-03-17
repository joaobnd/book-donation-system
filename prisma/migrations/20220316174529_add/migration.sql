/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_estado_fkey";

-- DropForeignKey
ALTER TABLE "Institution" DROP CONSTRAINT "Institution_address_fkey";

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "adresses" (
    "id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" CHAR(9) NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_estado_fkey" FOREIGN KEY ("estado") REFERENCES "UF"("sigla") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_address_fkey" FOREIGN KEY ("address") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
