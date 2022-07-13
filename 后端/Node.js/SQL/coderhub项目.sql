/*
 Navicat Premium Data Transfer

 Source Server         : root
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : coderhub

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 13/07/2022 17:53:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for avatars
-- ----------------------------
DROP TABLE IF EXISTS `avatars`;
CREATE TABLE `avatars`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int NULL DEFAULT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `avatars_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of avatars
-- ----------------------------

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `moment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment_id` int NULL DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `comment_id`(`comment_id`) USING BTREE,
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES (3, 'nb~', 1, 5, NULL, '2022-07-08 16:35:58', '2022-07-08 18:21:58');
INSERT INTO `comments` VALUES (6, 'PHP才是世界上最好的语言~', 1, 5, NULL, '2022-07-08 18:32:10', '2022-07-08 18:32:10');
INSERT INTO `comments` VALUES (8, '没有最完美的语言~', 1, 1, 6, '2022-07-10 14:28:31', '2022-07-10 14:28:31');

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int NULL DEFAULT NULL,
  `moment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `moment_id`(`moment_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `files_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `files_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files
-- ----------------------------

-- ----------------------------
-- Table structure for labels
-- ----------------------------
DROP TABLE IF EXISTS `labels`;
CREATE TABLE `labels`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of labels
-- ----------------------------
INSERT INTO `labels` VALUES (1, '前端', '2022-07-10 17:05:53', '2022-07-10 17:05:53');
INSERT INTO `labels` VALUES (4, 'JS', '2022-07-10 17:42:49', '2022-07-10 17:42:49');
INSERT INTO `labels` VALUES (6, '后端', '2022-07-10 18:09:20', '2022-07-10 18:09:20');
INSERT INTO `labels` VALUES (7, 'JavaScript', '2022-07-10 18:12:03', '2022-07-10 18:12:03');
INSERT INTO `labels` VALUES (8, '青春', '2022-07-10 18:16:40', '2022-07-10 18:16:40');
INSERT INTO `labels` VALUES (9, '编程', '2022-07-10 18:16:40', '2022-07-10 18:16:40');
INSERT INTO `labels` VALUES (10, '励志', '2022-07-10 20:08:42', '2022-07-10 20:08:42');
INSERT INTO `labels` VALUES (11, '情感', '2022-07-10 20:08:42', '2022-07-10 20:08:42');
INSERT INTO `labels` VALUES (12, '无聊', '2022-07-11 14:12:54', '2022-07-11 14:12:54');

-- ----------------------------
-- Table structure for moments
-- ----------------------------
DROP TABLE IF EXISTS `moments`;
CREATE TABLE `moments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `moments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moments
-- ----------------------------
INSERT INTO `moments` VALUES (1, 'JS是世界上最好的语言~', 1, '2022-07-07 18:02:25', '2022-07-08 15:07:56');
INSERT INTO `moments` VALUES (3, '道阻且长行则将至~', 1, '2022-07-07 18:08:40', '2022-07-07 18:08:40');
INSERT INTO `moments` VALUES (4, '纵然再苦守数百年 我的心意 始终如一', 1, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (5, '曾几何时，他也好，她也好，都是这家伙的被害者。所以我才憎恶着。这个强求着所谓“大家”的世界。必须建立在牺牲某人之上才能成立的低劣的和平。以温柔和正义粉饰，明明是恶毒之物却登大雅之堂，随着时间的流逝越发凶恶，除欺瞒外别无其二的空虚的概念。过去和世界都是无法改变的。发生过的事情和所谓的“大家”都是无法改变的。但是，并不是说自己只能隶属于他们', 1, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (6, '不要告诉我你不需要保护，不要告诉我你不寂寞，知微，我只希望你，在走过黑夜的那个时辰，不要倔强的选择一个人。', 3, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (7, 'If you shed tears when you miss the sun, you also miss the stars.如果你因失去了太阳而流泪，那么你也将失去群星了。', 1, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (8, '在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (9, '某一天，突然发现，许多结果都与路径无关。', 4, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (10, '限定目的，能使人生变得简洁。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (11, '翅膀长在你的肩上，太在乎别人对于飞行姿势的批评，所以你飞不起来', 4, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (12, '一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (13, '不乱于心，不困于情。不畏将来，不念过往。如此，安好。', 3, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (14, '如果你给我的，和你给别人的是一样的，那我就不要了。', 3, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (15, '故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (16, '你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (17, '你如果认识从前的我，也许你会原谅现在的我。', 4, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (18, '每一个不曾起舞的日子，都是对生命的辜负。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (19, '向来缘浅，奈何情深。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (20, '心之所向 素履以往 生如逆旅 一苇以航', 3, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (21, '生如夏花之绚烂，死如秋叶之静美。', 3, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (22, '答案很长，我准备用一生的时间来回答，你准备要听了吗？', 4, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (23, '因为爱过，所以慈悲；因为懂得，所以宽容。', 4, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (24, '我们听过无数的道理，却仍旧过不好这一生。', 1, '2022-07-07 19:12:03', '2022-07-07 19:12:03');
INSERT INTO `moments` VALUES (25, '我来不及认真地年轻，待明白过来时，只能选择认真地老去。', 2, '2022-07-07 19:12:03', '2022-07-07 19:12:03');

-- ----------------------------
-- Table structure for moments_labels
-- ----------------------------
DROP TABLE IF EXISTS `moments_labels`;
CREATE TABLE `moments_labels`  (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`, `label_id`) USING BTREE,
  INDEX `label_id`(`label_id`) USING BTREE,
  CONSTRAINT `moments_labels_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moments_labels_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `labels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moments_labels
-- ----------------------------
INSERT INTO `moments_labels` VALUES (1, 1, '2022-07-11 14:20:51', '2022-07-11 14:20:51');
INSERT INTO `moments_labels` VALUES (1, 4, '2022-07-11 14:20:51', '2022-07-11 14:20:51');
INSERT INTO `moments_labels` VALUES (1, 9, '2022-07-11 14:20:51', '2022-07-11 14:20:51');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar_url` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'coderhxl', 'e10adc3949ba59abbe56e057f20f883e', '2022-07-07 17:28:36', '2022-07-13 17:52:28', NULL);
INSERT INTO `users` VALUES (2, 'coderwhy', '25f9e794323b453885f5181f1b624d0b', '2022-07-07 17:28:51', '2022-07-07 17:28:51', NULL);
INSERT INTO `users` VALUES (3, 'lucy', '3d362284c8b5528045930ea2234cc285', '2022-07-07 19:09:47', '2022-07-07 19:09:47', NULL);
INSERT INTO `users` VALUES (4, 'lili', '13b84e27ae884ad0a24d817d23b75be0', '2022-07-07 19:09:56', '2022-07-07 19:09:56', NULL);
INSERT INTO `users` VALUES (5, 'lihub', '81dc9bdb52d04dc20036dbd8313ed055', '2022-07-07 19:10:07', '2022-07-13 17:52:28', NULL);

SET FOREIGN_KEY_CHECKS = 1;
