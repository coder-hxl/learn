# DQL

# 创建表
CREATE TABLE `products` (
  id int PRIMARY KEY AUTO_INCREMENT,
	brand VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2, 1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);

# 1.基本查询
# 查询表中所有字段以及所有的数据
SELECT * FROM `products`;
# 查询指定的字段
SELECT title, price FROM `products`;
# 对字段结果起别名
SELECT title AS phoneTitle, price AS currentPrice FROM `products`;

# 2.where条件
# 2.1. 条件判断语句
# 案例: 查询价格大于1000的手机
SELECT title, price FROM `products` WHERE price > 1000;
# 案例二: 查询价格等于999的手机
SELECT * FROM `products` WHERE price = 999;
# 案例三: 查询价格不等于999的手机
SELECT * FROM `products` WHERE price != 999;
SELECT * FROM `products` WHERE price <> 999;
# 案例四: 查询品牌是华为的手机
SELECT * FROM `products` WHERE brand = '华为';

# 2.2. 逻辑运算语句
# 案例一: 查询 1000 到 2000 的手机
SELECT * FROM `products` WHERE price > 1000 AND price < 2000;
SELECT * FROM `products` WHERE price > 1000 && price < 2000;
# BETWEEN AND 包含等于
SELECT * FROM `products` WHERE price BETWEEN 1000 AND 2000;
# 案例二: 价格在 5000 以上或品牌是华为的手机
SELECT * FROM `products` WHERE price > 5000 OR brand = '华为';

# 将某些值设置为 NULL
UPDATE `products` SET url = NULL WHERE id > 90 AND id < 95;
# 查询某一个值为 NULL
SELECT * FROM `products` WHERE url is NULL;

# 2.3. 模糊查询
SELECT * FROM `products` WHERE title LIKE '%M%';
SELECT * FROM `products` WHERE title LIKE '%P%';
SELECT * FROM `products` WHERE title LIKE '_P%';

# 2.4.符合多个条件
SELECT * FROM `products` WHERE brand = '华为' || brand = '苹果' || brand = '小米';
SELECT * FROM `products` WHERE brand IN ('华为', '苹果', '小米');

# 3.对结果排序
SELECT * FROM `products` ORDER BY price ASC, score DESC;

# 4.分页查询
# LIMIT limit OFFSET offset
# LIMIT offset, limit
SELECT * FROM `products` LIMIT 20 OFFSET 0;
SELECT * FROM `products` LIMIT 20 OFFSET 20;
SELECT * FROM `products` LIMIT 40, 20;










