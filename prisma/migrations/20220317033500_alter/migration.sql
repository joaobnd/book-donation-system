-- DropForeignKey
ALTER TABLE "Institution" DROP CONSTRAINT "Institution_admin_fkey";

-- AlterTable
ALTER TABLE "Institution" ALTER COLUMN "admin" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_admin_fkey" FOREIGN KEY ("admin") REFERENCES "admins"("user") ON DELETE SET NULL ON UPDATE CASCADE;
