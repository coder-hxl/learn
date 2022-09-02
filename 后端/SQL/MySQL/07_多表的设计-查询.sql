# 1.获取到的是笛卡尔乘积
SELECT * FROM `products`, `brand`;
# 对获取到笛卡尔乘积进行筛选
SELECT * FROM `products`, `brand` WHERE products.brand_id = brand.id;


# 2.左连接
# 2.1. 查询所有的手机 (包含没有品牌数据)
SELECT * FROM `products` LEFT OUTER JOIN `brand` ON products.brand_id = brand.id;

# 2.2. 查询没有对应品牌数据的手机
SELECT * FROM `products` LEFT JOIN `brand` ON products.brand_id = brand.id WHERE brand.id IS NULL;


# 3.右连接
# 3.1. 查询所有的品牌数据 (包含没有对应手机)
SELECT * FROM `products` RIGHT OUTER JOIN `brand` ON products.brand_id = brand.id;

# 3.2. 查询没有对应手机的品牌数据
SELECT * FROM `products` RIGHT JOIN `brand` ON products.brand_id = brand.id WHERE products.brand_id IS NULL;


# 4.内连接
SELECT * FROM `products` JOIN `brand` ON products.brand_id = brand.id;
SELECT * FROM `products` JOIN `brand` ON products.brand_id = brand.id WHERE products.price > 5000;


# 全连接
# MySQL 不支持 FULL OUTER JOIN
SELECT * FROM `products` FULL OUTER JOIN `brand` ON products.brand_id = brand.id;

(SELECT * FROM `products` LEFT  OUTER JOIN `brand` ON products.brand_id = brand.id)
UNION
(SELECT * FROM `products` RIGHT OUTER JOIN `brand` ON products.brand_id = brand.id)

(SELECT * FROM `products` LEFT OUTER JOIN `brand` ON products.brand_id = brand.id WHERE brand.id IS NULL)
UNION
(SELECT * FROM `products` RIGHT OUTER JOIN `brand` ON products.brand_id = brand.id WHERE products.brand_id IS NULL)










