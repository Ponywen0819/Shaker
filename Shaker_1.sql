ALTER TABLE `accounts` DROP FOREIGN KEY `fk_accounts_picture_1`;
ALTER TABLE `admin` DROP FOREIGN KEY `fk_admin_publisher_1`;
ALTER TABLE `cart` DROP FOREIGN KEY `fk_cart_accounts_1`;
ALTER TABLE `cart` DROP FOREIGN KEY `fk_cart_product_1`;
ALTER TABLE `comment` DROP FOREIGN KEY `fk_comment_picture_1`;
ALTER TABLE `comment` DROP FOREIGN KEY `fk_comment_order_1`;
ALTER TABLE `comment` DROP FOREIGN KEY `fk_comment_product_1`;
ALTER TABLE `coupon` DROP FOREIGN KEY `fk_coupon_shop_1`;
ALTER TABLE `coupon` DROP FOREIGN KEY `fk_coupon_coupon_type_1`;
ALTER TABLE `coupon` DROP FOREIGN KEY `fk_coupon_publisher_1`;
ALTER TABLE `order_detail` DROP FOREIGN KEY `fk_order_detial_order_1`;
ALTER TABLE `order_detail` DROP FOREIGN KEY `fk_order_detial_product_1`;
ALTER TABLE `product` DROP FOREIGN KEY `fk_product_shop_1`;
ALTER TABLE `product` DROP FOREIGN KEY `fk_product_category_detial_1`;
ALTER TABLE `product` DROP FOREIGN KEY `fk_product_picture_1`;
ALTER TABLE `shop` DROP FOREIGN KEY `fk_shop_accounts_1`;
ALTER TABLE `shop` DROP FOREIGN KEY `fk_shop_picture_1`;
ALTER TABLE `shop` DROP FOREIGN KEY `fk_shop_publisher_1`;

ALTER TABLE `cart` DROP INDEX `UNIQUE`;

DROP TABLE `accounts`;
DROP TABLE `admin`;
DROP TABLE `cart`;
DROP TABLE `category_type`;
DROP TABLE `comment`;
DROP TABLE `coupon`;
DROP TABLE `coupon_type`;
DROP TABLE `order`;
DROP TABLE `order_detail`;
DROP TABLE `picture`;
DROP TABLE `product`;
DROP TABLE `publisher`;
DROP TABLE `shop`;

CREATE TABLE `accounts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_id` nvarchar NOT NULL,
  `name` nvarchar NOT NULL,
  `email` nvarchar NOT NULL,
  `phone` nvarchar NOT NULL,
  `password` nvarchar NOT NULL,
  `last_login` datetime NULL,
  `photo` int NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `admin`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` nvarchar NOT NULL,
  `account` nvarchar NOT NULL,
  `password` nvarchar NOT NULL,
  `publisher_id` int NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `cart`  (
  `owner_id` int NOT NULL,
  `product_id` int NOT NULL,
  `count` int NOT NULL,
  UNIQUE INDEX `UNIQUE`(`owner_id`, `product_id`)
);

CREATE TABLE `category_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` nvarchar NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `comment`  (
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `star` int NOT NULL,
  `description` nvarchar NULL,
  `picture` int NOT NULL,
  `time` datetime NOT NULL
);

CREATE TABLE `coupon`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `publisher_id` int NOT NULL,
  `name` nvarchar NOT NULL,
  `type` int NOT NULL,
  `shop_id` int NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `coupon_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `minimum_consumption` decimal NOT NULL,
  `discount` decimal NOT NULL,
  `discount_type` int NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `order`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner_id` int NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `payment` int NOT NULL,
  `status` int NOT NULL,
  `free_fee` int NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `address` nvarchar NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `order_detail`  (
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `number` int NOT NULL
);

CREATE TABLE `picture`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_path` nvarchar NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `product`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `shop_id` int NOT NULL,
  `name` nvarchar NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `number` int NOT NULL,
  `intro` nvarchar NOT NULL,
  `category` int NOT NULL,
  `picture_id` int NOT NULL,
  `avgstar` decimal(2, 1) NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `publisher`  (
  `publisher_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`publisher_id`)
);

CREATE TABLE `shop`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner_id` int NOT NULL,
  `name` nvarchar NOT NULL,
  `avgstar` int NOT NULL,
  `intro` nvarchar NULL,
  `last_login` datetime(6) NULL,
  `logo` int NULL,
  `publisher_id` int NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `accounts` ADD CONSTRAINT `fk_accounts_picture_1` FOREIGN KEY (`photo`) REFERENCES `picture` (`id`);
ALTER TABLE `admin` ADD CONSTRAINT `fk_admin_publisher_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`);
ALTER TABLE `cart` ADD CONSTRAINT `fk_cart_accounts_1` FOREIGN KEY (`owner_id`) REFERENCES `accounts` (`id`);
ALTER TABLE `cart` ADD CONSTRAINT `fk_cart_product_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_picture_1` FOREIGN KEY (`picture`) REFERENCES `picture` (`id`);
ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_order_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);
ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_product_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
ALTER TABLE `coupon` ADD CONSTRAINT `fk_coupon_shop_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`);
ALTER TABLE `coupon` ADD CONSTRAINT `fk_coupon_coupon_type_1` FOREIGN KEY (`type`) REFERENCES `coupon_type` (`id`);
ALTER TABLE `coupon` ADD CONSTRAINT `fk_coupon_publisher_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`);
ALTER TABLE `order_detail` ADD CONSTRAINT `fk_order_detial_order_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE;
ALTER TABLE `order_detail` ADD CONSTRAINT `fk_order_detial_product_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
ALTER TABLE `product` ADD CONSTRAINT `fk_product_shop_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`);
ALTER TABLE `product` ADD CONSTRAINT `fk_product_category_detial_1` FOREIGN KEY (`category`) REFERENCES `category_type` (`id`);
ALTER TABLE `product` ADD CONSTRAINT `fk_product_picture_1` FOREIGN KEY (`picture_id`) REFERENCES `picture` (`id`);
ALTER TABLE `shop` ADD CONSTRAINT `fk_shop_accounts_1` FOREIGN KEY (`owner_id`) REFERENCES `accounts` (`id`);
ALTER TABLE `shop` ADD CONSTRAINT `fk_shop_picture_1` FOREIGN KEY (`logo`) REFERENCES `picture` (`id`);
ALTER TABLE `shop` ADD CONSTRAINT `fk_shop_publisher_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`);

