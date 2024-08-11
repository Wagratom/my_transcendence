-- CreateEnum
CREATE TYPE "StatusFriendship" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT DEFAULT 'https://img.lovepik.com/bg/20231218/Stunning-Wolf-HD-Wallpaper-Art-Full-HD-1920x1080-1080p-Background_2634113_wh860.jpg!/fw/860',
    "isOnline" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "winners" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friendship" (
    "id" SERIAL NOT NULL,
    "sentRequestsId" INTEGER NOT NULL,
    "receivedRequestsId" INTEGER NOT NULL,
    "status" "StatusFriendship" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Friendship_sentRequestsId_receivedRequestsId_key" ON "Friendship"("sentRequestsId", "receivedRequestsId");

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_sentRequestsId_fkey" FOREIGN KEY ("sentRequestsId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_receivedRequestsId_fkey" FOREIGN KEY ("receivedRequestsId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
