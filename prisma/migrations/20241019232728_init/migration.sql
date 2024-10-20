/*
  Warnings:

  - You are about to drop the `Notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ToDo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Notes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ToDo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "toDo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "notes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "listId" INTEGER NOT NULL,
    CONSTRAINT "notes_listId_fkey" FOREIGN KEY ("listId") REFERENCES "toDo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
