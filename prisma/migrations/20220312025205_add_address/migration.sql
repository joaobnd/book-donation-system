-- CreateTable
CREATE TABLE "Address" (
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("cep")
);
