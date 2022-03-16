/*
  Warnings:

  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_siglaUf_fkey";

-- DropTable
DROP TABLE "address";

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" CHAR(9) NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_estado_fkey" FOREIGN KEY ("estado") REFERENCES "UF"("sigla") ON DELETE RESTRICT ON UPDATE CASCADE;
