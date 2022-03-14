-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
