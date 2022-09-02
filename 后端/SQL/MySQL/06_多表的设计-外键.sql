# 1.创建 brand 表和插入数据
CREATE TABLE IF NOT EXISTS `brand`(
  id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	website VARCHAR(100),
	phoneRank INT
);

INSERT INTO `brand` (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 1);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('小米', 'www.mi.com', 5);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 3);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('OPPO', 'www.oppo.com', 6);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('京东', 'www.jd.com', 8);
INSERT INTO `brand` (name, website, phoneRank) VALUES ('Google', 'www.google.com', 10);

# 2.给 brand_id 设置引用 brand 的 id 的外键约束
# 新建一个字段
ALTER TABLE `products` ADD `brand_id` INT;

# 给 brand_id 设置外键
ALTER TABLE `products` ADD FOREIGN KEY(brand_id) REFERENCES brand(id);

# 给 brand_id 设置值
UPDATE `products` SET brand_id = 1 WHERE brand = '华为';
UPDATE `products` SET brand_id = 2 WHERE brand = '小米';
UPDATE `products` SET brand_id = 3 WHERE brand = '苹果';
UPDATE `products` SET brand_id = 4 WHERE brand = 'OPPO';

# 3.修改外键引用的 id
UPDATE `brand` SET id = 100 WHERE name = '华为';

# 4.修改 brand_id 关联外键的 action
# 4.1. 获取当前外键的名称
SHOW CREATE TABLE `products`;
-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `voteCnt` int DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `pid` int DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `brand_id` (`brand_id`),
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

# 4.2. 根据名称将外键删除
ALTER TABLE `products` DROP FOREIGN KEY products_ibfk_1;

# 4.3. 重新添加外键约束
ALTER TABLE `products` ADD FOREIGN KEY (brand_id) REFERENCES `brand`(id) ON UPDATE CASCADE ON DELETE RESTRICT;

UPDATE `brand` SET id = 100 WHERE name = '华为';











