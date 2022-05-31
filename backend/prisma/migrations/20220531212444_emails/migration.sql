-- CreateTable
CREATE TABLE "email" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL,

    CONSTRAINT "email_pkey" PRIMARY KEY ("id")
);
