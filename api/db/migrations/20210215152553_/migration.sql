/*
  Warnings:

  - You are about to drop the `Meals` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "Meal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fnum" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Meals";
PRAGMA foreign_keys=on;
