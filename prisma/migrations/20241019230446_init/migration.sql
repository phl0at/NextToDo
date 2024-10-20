-- CreateTable
CREATE TABLE "ToDo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "listId" INTEGER NOT NULL,
    CONSTRAINT "Notes_listId_fkey" FOREIGN KEY ("listId") REFERENCES "ToDo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);