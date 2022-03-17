-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('NOVO', 'USADO', 'DANIFICADO');

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "condition" "Condition" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_address_fkey" FOREIGN KEY ("address") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
