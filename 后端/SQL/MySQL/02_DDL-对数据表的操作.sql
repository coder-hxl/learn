# 查看所有表
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS `students` (
  `name` VARCHAR(10) NOT NULL,
  `age` INT,
  `score` INT,
	`hieght` DECIMAL(10, 2),
	`birthday` YEAR,
	`phoneNum` VARCHAR(20) UNIQUE
);

# 删除表
DROP TABLE IF EXISTS `students`;

# 查看表结构
DESC `students`;

# 查看创建表的 SQL 语句
SHOW CREATE TABLE `students`;
-- CREATE TABLE `students` (
--   `name` varchar(10) DEFAULT NULL,
--   `age` int DEFAULT NULL,
--   `score` int DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

# 完整创建表的语法
CREATE TABLE `users`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT DEFAULT 0,
	phoneNum VARCHAR(20) UNIQUE DEFAULT '',
	createTime TIMESTAMP
);


# 修改表
# 1.修改表名
ALTER TABLE `users` RENAME TO `user`;
# 2.添加新的列
ALTER TABLE `user` ADD `updateTime` TIMESTAMP;
# 3.修改字段的名称
ALTER TABLE `user` CHANGE `phoneNum` `tplPhone` VARCHAR(20);
# 4.修改字段的类型
ALTER TABLE `user` MODIFY `name` VARCHAR(30);
# 5.删除某一个字段
ALTER TABLE `user` DROP `age`;

# 补充
# 根据一张表结构去创建另一张表
CREATE TABLE `user2` LIKE `user`;
# 根据一张表内容去创建另一张表
CREATE TABLE `user3` (SELECT * FROM `user`);











