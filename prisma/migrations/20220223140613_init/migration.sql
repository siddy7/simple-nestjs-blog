-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address_street` VARCHAR(191) NOT NULL,
    `address_suite` VARCHAR(191) NOT NULL,
    `address_city` VARCHAR(191) NOT NULL,
    `address_zipcode` VARCHAR(191) NOT NULL,
    `address_geo_lat` VARCHAR(191) NOT NULL,
    `address_geo_lng` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `company_catchPhrase` VARCHAR(191) NOT NULL,
    `company_bs` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
