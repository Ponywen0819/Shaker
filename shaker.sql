/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 101002
 Source Host           : localhost:3306
 Source Schema         : shaker

 Target Server Type    : MySQL
 Target Server Version : 101002
 File Encoding         : 65001

 Date: 08/01/2023 23:36:58
*/

DROP DATABASE IF EXISTS shaker;
CREATE DATABASE shaker;

use shaker;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` datetime(0) NULL DEFAULT NULL,
  `photo` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_accounts_picture_1`(`photo`) USING BTREE,
  CONSTRAINT `fk_accounts_picture_1` FOREIGN KEY (`photo`) REFERENCES `picture` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of accounts
-- ----------------------------
INSERT INTO `accounts` VALUES (1, 'ponywen', '溫紹傑', 'pony@gmail.com', '0916781375', 'a2140542de1529b2233806d46e2d1c63af8463a260141169cfbf38caa676596e', '2023-01-05 21:39:52', 16);
INSERT INTO `accounts` VALUES (2, 'royis87', '溫蛇傑', 'roy@gmail.com', '0987654321', 'c20c769db9e1d1118841c9f453800d03dad2d9854e2ba589b4e0fb6c0f42f886', '2023-01-07 13:38:27', 25);
INSERT INTO `accounts` VALUES (3, 'roy', '曉勇', 'xiao@gmail.com', '0987654544', 'c20c769db9e1d1118841c9f453800d03dad2d9854e2ba589b4e0fb6c0f42f886', NULL, NULL);
INSERT INTO `accounts` VALUES (4, '21', '11', '1', '1', 'c20c769db9e1d1118841c9f453800d03dad2d9854e2ba589b4e0fb6c0f42f886', '2023-01-05 13:14:35', NULL);

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `publisher_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_admin_publisher_1`(`publisher_id`) USING BTREE,
  CONSTRAINT `fk_admin_publisher_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, '溫韶婕', 'pony', 'c20c769db9e1d1118841c9f453800d03dad2d9854e2ba589b4e0fb6c0f42f886', 4);

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `owner_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  UNIQUE INDEX `UNIQUE`(`owner_id`, `product_id`) USING BTREE,
  INDEX `fk_cart_product_1`(`product_id`) USING BTREE,
  CONSTRAINT `fk_cart_accounts_1` FOREIGN KEY (`owner_id`) REFERENCES `accounts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_cart_product_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (2, 6, 1);

-- ----------------------------
-- Table structure for category_type
-- ----------------------------
DROP TABLE IF EXISTS `category_type`;
CREATE TABLE `category_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category_type
-- ----------------------------
INSERT INTO `category_type` VALUES (1, '3C');
INSERT INTO `category_type` VALUES (2, '周邊');
INSERT INTO `category_type` VALUES (3, 'NB');
INSERT INTO `category_type` VALUES (4, '通訊');
INSERT INTO `category_type` VALUES (5, '數位');
INSERT INTO `category_type` VALUES (6, '家電');
INSERT INTO `category_type` VALUES (7, '日用');
INSERT INTO `category_type` VALUES (8, '食品');
INSERT INTO `category_type` VALUES (9, '生活');
INSERT INTO `category_type` VALUES (10, '運動戶外');
INSERT INTO `category_type` VALUES (11, '美妝');
INSERT INTO `category_type` VALUES (12, '衣鞋包錶');
INSERT INTO `category_type` VALUES (14, '書店');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `star` int(11) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `picture` int(11) NOT NULL,
  `time` datetime(0) NOT NULL,
  INDEX `fk_comment_picture_1`(`picture`) USING BTREE,
  INDEX `fk_comment_order_1`(`order_id`) USING BTREE,
  INDEX `fk_comment_product_1`(`product_id`) USING BTREE,
  CONSTRAINT `fk_comment_order_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_comment_picture_1` FOREIGN KEY (`picture`) REFERENCES `picture` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_comment_product_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for coupon
-- ----------------------------
DROP TABLE IF EXISTS `coupon`;
CREATE TABLE `coupon`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `publisher_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` int(11) NOT NULL,
  `shop_id` int(11) NULL DEFAULT NULL,
  `start_time` datetime(0) NOT NULL,
  `end_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_coupon_shop_1`(`shop_id`) USING BTREE,
  INDEX `fk_coupon_coupon_type_1`(`type`) USING BTREE,
  INDEX `fk_coupon_publisher_1`(`publisher_id`) USING BTREE,
  CONSTRAINT `fk_coupon_coupon_type_1` FOREIGN KEY (`type`) REFERENCES `coupon_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_coupon_publisher_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_coupon_shop_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of coupon
-- ----------------------------
INSERT INTO `coupon` VALUES (3, 1, 'jjj', 1, NULL, '2023-01-02 22:04:40', '2023-01-09 22:04:40');
INSERT INTO `coupon` VALUES (4, 1, 'a', 2, NULL, '2023-01-02 22:10:01', '2023-01-09 22:10:01');
INSERT INTO `coupon` VALUES (5, 1, '11', 3, NULL, '2023-01-02 22:41:37', '2023-01-09 22:41:37');
INSERT INTO `coupon` VALUES (6, 1, '愛你99', 4, NULL, '2023-01-03 22:34:22', '2023-01-10 22:34:22');
INSERT INTO `coupon` VALUES (7, 2, '我曹', 5, NULL, '2023-01-07 13:38:13', '2023-01-14 13:38:13');
INSERT INTO `coupon` VALUES (8, 4, '1', 9, NULL, '2023-01-08 22:33:28', '2023-01-15 22:33:28');

-- ----------------------------
-- Table structure for coupon_type
-- ----------------------------
DROP TABLE IF EXISTS `coupon_type`;
CREATE TABLE `coupon_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `minimum_consumption` decimal(10, 0) NOT NULL,
  `discount` decimal(10, 0) NOT NULL,
  `discount_type` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of coupon_type
-- ----------------------------
INSERT INTO `coupon_type` VALUES (1, 0, 11, 1);
INSERT INTO `coupon_type` VALUES (2, 0, 11, 1);
INSERT INTO `coupon_type` VALUES (3, 0, 123, 1);
INSERT INTO `coupon_type` VALUES (4, 300, 99, 2);
INSERT INTO `coupon_type` VALUES (5, 10, 5, 2);
INSERT INTO `coupon_type` VALUES (6, 100, 0, 0);
INSERT INTO `coupon_type` VALUES (7, 100, 0, 0);
INSERT INTO `coupon_type` VALUES (8, 100, 0, 0);
INSERT INTO `coupon_type` VALUES (9, 12, 0, 0);

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `start_time` datetime(0) NOT NULL,
  `end_time` datetime(0) NOT NULL,
  `payment` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `free_fee` int(11) NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (4, 2, '2023-01-03 20:19:40', '2023-01-10 20:19:40', 0, 2, 0, 204.12, '');
INSERT INTO `order` VALUES (5, 2, '2023-01-03 22:39:48', '2023-01-10 22:39:48', 2, 1, 0, 637.08, '文化路113巷9-1號4樓');
INSERT INTO `order` VALUES (6, 2, '2023-01-05 23:43:50', '2023-01-12 23:43:50', 1, 1, 0, 10160.00, 'wqeqweqweqwe');
INSERT INTO `order` VALUES (7, 2, '2023-01-06 00:00:03', '2023-01-13 00:00:03', 1, 2, 0, 151.10, '文化路113巷9-1號4樓');

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail`  (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  INDEX `fk_order_detial_order_1`(`order_id`) USING BTREE,
  INDEX `fk_order_detial_product_1`(`product_id`) USING BTREE,
  CONSTRAINT `fk_order_detial_order_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_order_detial_product_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_detail
-- ----------------------------
INSERT INTO `order_detail` VALUES (4, 1, 4);
INSERT INTO `order_detail` VALUES (5, 1, 4);
INSERT INTO `order_detail` VALUES (6, 2, 1);
INSERT INTO `order_detail` VALUES (6, 4, 1);
INSERT INTO `order_detail` VALUES (7, 5, 1);

-- ----------------------------
-- Table structure for picture
-- ----------------------------
DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of picture
-- ----------------------------
INSERT INTO `picture` VALUES (1, './static/picture/eaadc259-4456-42b5-addd-4df6df44441d.png');
INSERT INTO `picture` VALUES (2, './static/picture/30602349-fda7-4bab-8fb8-8296fdd68386.png');
INSERT INTO `picture` VALUES (3, './static/picture/e912f1bf-ef3e-41bc-9cf8-012b8f7f3b8f.png');
INSERT INTO `picture` VALUES (4, './static/picture/4d19ab8e-db02-43d4-8f30-6447d2be59e1.jpeg');
INSERT INTO `picture` VALUES (5, './static/picture/5e8c3242-cf2e-4bc0-80f5-6c731c23e720.jpeg');
INSERT INTO `picture` VALUES (6, './static/picture/ccac6017-1b2a-4b1b-907f-6f81e8421cdd.png');
INSERT INTO `picture` VALUES (7, './static/picture/100f8d4e-2a3e-4c92-ba87-2b8fb0982ca0.png');
INSERT INTO `picture` VALUES (8, './static/picture/87eaba35-18ba-48af-bae3-59e6d83e1ed1.jpeg');
INSERT INTO `picture` VALUES (9, './static/picture/a02d01b3-996c-4d46-a8f4-6a07b3133814.jpeg');
INSERT INTO `picture` VALUES (10, './static/picture/af568c8e-e83a-47c9-bd83-54c2f7d3313d.png');
INSERT INTO `picture` VALUES (11, './static/picture/7d4b15c7-34d5-42fe-8db2-d4c0b7bee65b.png');
INSERT INTO `picture` VALUES (12, './static/picture/f9e9e356-efaa-463a-94b9-34c8ac0b4a21.png');
INSERT INTO `picture` VALUES (13, './static/picture/51492fad-c1fd-427b-9b2d-3c2a827b3ca9.jpeg');
INSERT INTO `picture` VALUES (14, './static/picture/fc76a854-17fa-4adb-a77f-9e0f8feb3a7a.png');
INSERT INTO `picture` VALUES (15, './static/picture/962e103b-5078-4188-a2ea-fd790455739f.jpeg');
INSERT INTO `picture` VALUES (16, './static/picture/04726d7b-5b52-4ef9-9aab-8c4116169170.png');
INSERT INTO `picture` VALUES (17, './static/picture/498e147c-c370-4584-832c-795ca86d5d71.png');
INSERT INTO `picture` VALUES (18, './static/picture/cc460dbe-6899-4191-90fe-14a18233e877.jpeg');
INSERT INTO `picture` VALUES (19, './static/picture/e3a19f2e-b05b-4266-9420-f1661f2be168.png');
INSERT INTO `picture` VALUES (20, './static/picture/cf4763ab-1f16-4ea3-a05c-78b346f4e104.jpeg');
INSERT INTO `picture` VALUES (21, './static/picture/8b818dda-5c28-492e-9082-0dc428523d10.jpeg');
INSERT INTO `picture` VALUES (22, './static/picture/bb6e91e6-7352-48d1-af95-1ef636616d0f.jpeg');
INSERT INTO `picture` VALUES (23, './static/picture/b67c71d8-c17a-46e5-9176-1066e8a62e98.png');
INSERT INTO `picture` VALUES (24, './static/picture/2dc9dacc-6b88-421f-8d2f-6bf83c170235.jpeg');
INSERT INTO `picture` VALUES (25, './static/picture/b295a542-95ae-4657-8b0a-7a5bfb3e2db7.jpeg');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `number` int(11) NOT NULL,
  `intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` int(11) NOT NULL,
  `picture_id` int(11) NOT NULL,
  `avgstar` decimal(2, 1) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_product_shop_1`(`shop_id`) USING BTREE,
  INDEX `fk_product_category_detial_1`(`category`) USING BTREE,
  INDEX `fk_product_picture_1`(`picture_id`) USING BTREE,
  CONSTRAINT `fk_product_category_detial_1` FOREIGN KEY (`category`) REFERENCES `category_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_product_picture_1` FOREIGN KEY (`picture_id`) REFERENCES `picture` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_product_shop_1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 1, '我槽', 123.00, 123115, '真是臥槽', 2, 1, 0.0, 0);
INSERT INTO `product` VALUES (2, 1, '他是一隻龍', 10000.00, 0, '他其實還不錯吃', 8, 2, 0.0, 1);
INSERT INTO `product` VALUES (3, 1, '這是一本天書', 1000.00, 1, '他真是天書 真心不騙', 14, 3, 0.0, 1);
INSERT INTO `product` VALUES (4, 1, '稀有猴子', 10.00, 0, '他可以幫你端盤子', 7, 4, 0.0, 1);
INSERT INTO `product` VALUES (5, 1, '協咖', 10.00, 0, '他是超級白痴的協咖', 3, 5, 0.0, 1);
INSERT INTO `product` VALUES (6, 2, '123', 1.00, 120, '123123', 3, 6, 0.0, 0);
INSERT INTO `product` VALUES (7, 1, '這就是一個垃圾袋', 699.00, 3, '她是拉機袋', 5, 7, 0.0, 1);
INSERT INTO `product` VALUES (8, 1, '他是溫紹傑的朋友', 123.00, 1234, '他是人工智慧的大師', 8, 8, 0.0, 1);
INSERT INTO `product` VALUES (9, 1, '工程數學', 699.00, 12, '他是一本工程數學', 14, 9, 0.0, 1);
INSERT INTO `product` VALUES (10, 1, '這是台北地圖', 500.00, 21, '這是超級台北地圖', 4, 10, 0.0, 1);
INSERT INTO `product` VALUES (11, 1, '這是黃色的本本', 12.00, 1, '黃色的本本', 2, 11, 0.0, 1);
INSERT INTO `product` VALUES (12, 1, '這是一張圖', 123.00, 1, '這是一張圖', 3, 12, 0.0, 1);
INSERT INTO `product` VALUES (13, 1, '這是帥哥', 1234.00, 1, '好帥', 4, 13, 0.0, 1);
INSERT INTO `product` VALUES (14, 1, '小朋友騎打交', 300.00, 1, '小朋友騎打交', 5, 14, 0.0, 1);
INSERT INTO `product` VALUES (15, 1, '這是我的駕照', 123.00, 1, '這是我的駕照\'', 6, 15, 0.0, 1);

-- ----------------------------
-- Table structure for publisher
-- ----------------------------
DROP TABLE IF EXISTS `publisher`;
CREATE TABLE `publisher`  (
  `publisher_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`publisher_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of publisher
-- ----------------------------
INSERT INTO `publisher` VALUES (1);
INSERT INTO `publisher` VALUES (2);
INSERT INTO `publisher` VALUES (3);
INSERT INTO `publisher` VALUES (4);

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avgstar` int(11) NOT NULL,
  `intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `last_login` datetime(6) NULL DEFAULT NULL,
  `logo` int(11) NULL DEFAULT NULL,
  `publisher_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_shop_accounts_1`(`owner_id`) USING BTREE,
  INDEX `fk_shop_picture_1`(`logo`) USING BTREE,
  INDEX `fk_shop_publisher_1`(`publisher_id`) USING BTREE,
  CONSTRAINT `fk_shop_accounts_1` FOREIGN KEY (`owner_id`) REFERENCES `accounts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_shop_picture_1` FOREIGN KEY (`logo`) REFERENCES `picture` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_shop_publisher_1` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`publisher_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES (1, 1, '溫紹傑', 5, '', '2023-01-05 20:50:34.000000', NULL, 1);
INSERT INTO `shop` VALUES (2, 2, '吳秉承', 5, '', '2023-01-07 13:37:45.000000', NULL, 2);
INSERT INTO `shop` VALUES (3, 4, '11', 5, '', '2023-01-05 13:14:32.000000', NULL, 3);

SET FOREIGN_KEY_CHECKS = 1;
