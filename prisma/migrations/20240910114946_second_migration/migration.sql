/*
  Warnings:

  - Made the column `Userid` on table `BackgroundCheck` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "BackgroundCheck" DROP CONSTRAINT "BackgroundCheck_Userid_fkey";

-- AlterTable
ALTER TABLE "BackgroundCheck" ALTER COLUMN "Userid" SET NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "createdAt" SET DEFAULT timezone('utc', now());

-- AddForeignKey
ALTER TABLE "BackgroundCheck" ADD CONSTRAINT "BackgroundCheck_Userid_fkey" FOREIGN KEY ("Userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
