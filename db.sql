CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descr` varchar(255) NOT NULL,
  `discount` float NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `original_price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci