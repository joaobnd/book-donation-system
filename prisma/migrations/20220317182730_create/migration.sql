/*
  Warnings:

  - Added the required column `institution` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "institution" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_institution_fkey" FOREIGN KEY ("institution") REFERENCES "Institution"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
