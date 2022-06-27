# 1.聚合函数的使用
# 求所有手机的总和
SELECT SUM(price) FROM `products`;
SELECT SUM(price) totalPrice FROM `products`;
# 求华为手机的总和
SELECT SUM(price) FROM `products` WHERE brand = '华为';
# 求华为手机的平均值
SELECT AVG(price) FROM `products` WHERE brand = '华为';
# 求最高价和最低价
SELECT MAX(price) FROM `products`;
SELECT MIN(price) FROM `products`;

# 求华为手机的个数
SELECT COUNT(*) FROM `products` WHERE brand = '华为';
SELECT COUNT(*) FROM `products` WHERE brand = '苹果';
SELECT COUNT(url) FROM `products` WHERE brand = '苹果';

SELECT COUNT(price) FROM `products`;
# 值重复不算进去
SELECT COUNT(DISTINCT price) FROM `products`;

# 2. GROUP BY 的使用
SELECT brand, AVG(price), COUNT(*), AVG(score) FROM `products` GROUP BY brand;

# 3. HAVING 的使用
SELECT brand, AVG(price) avgPrice, COUNT(*), AVG(score) FROM `products` GROUP BY brand HAVING avgPrice > 2000;


# 4.需求: score > 7.5 的手机, 求平均价格
# 升级: score > 7.5 的手机, 以品牌分类后, 求平均价格
SELECT brand, AVG(price) FROM `products` WHERE score > 7.5 GROUP BY brand;





