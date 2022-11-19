{
  "status": "success",
  "data":   [
        {
      "id": "index",
      "name": "sqlite_autoindex_BasketItems_1",
      "description": "BasketItems",
      "price": 9,
      "deluxePrice": null,
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "index",
      "name": "sqlite_autoindex_SecurityAnswers_1",
      "description": "SecurityAnswers",
      "price": 25,
      "deluxePrice": null,
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "index",
      "name": "sqlite_autoindex_Users_1",
      "description": "Users",
      "price": 3,
      "deluxePrice": null,
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Addresses",
      "description": "Addresses",
      "price": 5,
      "deluxePrice": "CREATE TABLE `Addresses` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `fullName` VARCHAR(255), `mobileNum` INTEGER, `zipCode` VARCHAR(255), `streetAddress` VARCHAR(255), `city` VARCHAR(255), `state` VARCHAR(255), `country` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "BasketItems",
      "description": "BasketItems",
      "price": 8,
      "deluxePrice": "CREATE TABLE `BasketItems` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `quantity` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `BasketId` INTEGER REFERENCES `Baskets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, `ProductId` INTEGER REFERENCES `Products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, UNIQUE (`BasketId`, `ProductId`))",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Baskets",
      "description": "Baskets",
      "price": 6,
      "deluxePrice": "CREATE TABLE `Baskets` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `coupon` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Captchas",
      "description": "Captchas",
      "price": 10,
      "deluxePrice": "CREATE TABLE `Captchas` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `captchaId` INTEGER, `captcha` VARCHAR(255), `answer` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Cards",
      "description": "Cards",
      "price": 11,
      "deluxePrice": "CREATE TABLE `Cards` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `fullName` VARCHAR(255), `cardNum` INTEGER, `expMonth` INTEGER, `expYear` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Challenges",
      "description": "Challenges",
      "price": 12,
      "deluxePrice": "CREATE TABLE `Challenges` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `key` VARCHAR(255), `name` VARCHAR(255), `category` VARCHAR(255), `tags` VARCHAR(255), `description` VARCHAR(255), `difficulty` INTEGER, `hint` VARCHAR(255), `hintUrl` VARCHAR(255), `mitigationUrl` VARCHAR(255), `solved` TINYINT(1), `disabledEnv` VARCHAR(255), `tutorialOrder` NUMBER, `codingChallengeStatus` NUMBER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Complaints",
      "description": "Complaints",
      "price": 13,
      "deluxePrice": "CREATE TABLE `Complaints` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `message` VARCHAR(255), `file` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Deliveries",
      "description": "Deliveries",
      "price": 14,
      "deluxePrice": "CREATE TABLE `Deliveries` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `price` FLOAT, `deluxePrice` FLOAT, `eta` FLOAT, `icon` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Feedbacks",
      "description": "Feedbacks",
      "price": 15,
      "deluxePrice": "CREATE TABLE `Feedbacks` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `comment` VARCHAR(255), `rating` INTEGER NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "ImageCaptchas",
      "description": "ImageCaptchas",
      "price": 16,
      "deluxePrice": "CREATE TABLE `ImageCaptchas` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `image` VARCHAR(255), `answer` VARCHAR(255), `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Memories",
      "description": "Memories",
      "price": 19,
      "deluxePrice": "CREATE TABLE `Memories` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `caption` VARCHAR(255), `imagePath` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "PrivacyRequests",
      "description": "PrivacyRequests",
      "price": 20,
      "deluxePrice": "CREATE TABLE `PrivacyRequests` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, `deletionRequested` TINYINT(1) DEFAULT 0, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Products",
      "description": "Products",
      "price": 7,
      "deluxePrice": "CREATE TABLE `Products` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `description` VARCHAR(255), `price` DECIMAL, `deluxePrice` DECIMAL, `image` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Quantities",
      "description": "Quantities",
      "price": 21,
      "deluxePrice": "CREATE TABLE `Quantities` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `quantity` INTEGER, `limitPerUser` INTEGER DEFAULT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `ProductId` INTEGER REFERENCES `Products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Recycles",
      "description": "Recycles",
      "price": 22,
      "deluxePrice": "CREATE TABLE `Recycles` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `quantity` INTEGER(4), `isPickup` TINYINT(1) DEFAULT 0, `date` DATETIME, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, `AddressId` INTEGER REFERENCES `Addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "SecurityAnswers",
      "description": "SecurityAnswers",
      "price": 24,
      "deluxePrice": "CREATE TABLE `SecurityAnswers` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `answer` VARCHAR(255), `UserId` INTEGER UNIQUE REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `SecurityQuestionId` INTEGER REFERENCES `SecurityQuestions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "SecurityQuestions",
      "description": "SecurityQuestions",
      "price": 23,
      "deluxePrice": "CREATE TABLE `SecurityQuestions` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `question` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Users",
      "description": "Users",
      "price": 2,
      "deluxePrice": "CREATE TABLE `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `username` VARCHAR(255) DEFAULT '', `email` VARCHAR(255) UNIQUE, `password` VARCHAR(255), `role` VARCHAR(255) DEFAULT 'customer', `deluxeToken` VARCHAR(255) DEFAULT '', `lastLoginIp` VARCHAR(255) DEFAULT '0.0.0.0', `profileImage` VARCHAR(255) DEFAULT '/assets/public/images/uploads/default.svg', `totpSecret` VARCHAR(255) DEFAULT '', `isActive` TINYINT(1) DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "Wallets",
      "description": "Wallets",
      "price": 26,
      "deluxePrice": "CREATE TABLE `Wallets` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `balance` INTEGER DEFAULT 0, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `UserId` INTEGER REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    },
        {
      "id": "table",
      "name": "sqlite_sequence",
      "description": "sqlite_sequence",
      "price": 4,
      "deluxePrice": "CREATE TABLE sqlite_sequence(name,seq)",
      "image": "6",
      "createdAt": "7",
      "updatedAt": "8",
      "deletedAt": "9"
    }
  ]
}