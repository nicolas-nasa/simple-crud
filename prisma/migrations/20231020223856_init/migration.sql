-- CreateTable
CREATE TABLE `Person` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NULL,
    `born` DATETIME(3) NULL,
    `email` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(20) NULL,
    `end` VARCHAR(255) NULL,
    `city` VARCHAR(100) NULL,
    `state` VARCHAR(50) NULL,
    `cep` VARCHAR(10) NULL,
    `document` VARCHAR(14) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Person_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
