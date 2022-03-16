-- CreateTable
CREATE TABLE "address" (
    "cep" VARCHAR(10) NOT NULL,
    "logradouro" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "siglaUf" VARCHAR(2) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("cep")
);

-- CreateTable
CREATE TABLE "UF" (
    "sigla" VARCHAR(2) NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "UF_pkey" PRIMARY KEY ("sigla")
);

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_siglaUf_fkey" FOREIGN KEY ("siglaUf") REFERENCES "UF"("sigla") ON DELETE RESTRICT ON UPDATE CASCADE;
