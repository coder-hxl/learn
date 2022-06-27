# DML

# 插入数据
INSERT INTO `user` VALUES (100, 'hxl', '123456', '2022-06-25', '2022-06-26'); 
INSERT INTO `user` (name, tplPhone, createTime, updateTime) VALUES ('why', '654321', '2022-06-25', '2022-06-26');

INSERT INTO `user` (name, tplPhone) VALUES ('lilei', '15626');

# 需求: createTime 和 updateTime 可以自动设置值
ALTER TABLE `user` MODIFY `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE `user` MODIFY `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO `user` (name, tplPhone) VALUES ('code', '12348');

# 删除数据
# 删除所有的数据
DELETE FROM `user`;
# 删除符合条件的数据
DELETE FROM `user` WHERE id = '103';

# 更新数据
# 更新所有的数据
UPDATE `user` SET name = 'lili', tplPhone = '1234855';
# 更新符合条件的数据
UPDATE `user` SET name = 'lili', tplPhone = '12345815' WHERE id =  106;