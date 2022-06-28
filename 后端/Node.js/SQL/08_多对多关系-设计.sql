# 1.基本数据模拟
CREATE TABLE IF NOT EXISTS `students`(
  id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

CREATE TABLE IF NOT EXISTS `courses`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE
);

INSERT INTO `students` (name, age) VALUES ('hxl', 18);
INSERT INTO `students` (name, age) VALUES ('why', 18);
INSERT INTO `students` (name, age) VALUES ('lili', 22);
INSERT INTO `students` (name, age) VALUES ('pink', 19);
INSERT INTO `students` (name, age) VALUES ('lilei', 24);

INSERT INTO `courses` (name, price) VALUES ('语文', 99);
INSERT INTO `courses` (name, price) VALUES ('数学', 88);
INSERT INTO `courses` (name, price) VALUES ('英语', 99);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('NodeJS', 288);
INSERT INTO `courses` (name, price) VALUES ('Java', 288);


# 2.创建关系表
CREATE TABLE IF NOT EXISTS `students_select_courses`(
	id INT PRIMARY KEY AUTO_INCREMENT,
	students_id INT NOT NULL,
	courses_id INT NOT NULL,
	FOREIGN KEY (students_id) REFERENCES students(id) ON UPDATE CASCADE,
	FOREIGN KEY (courses_id) REFERENCES courses(id) ON UPDATE CASCADE
);


# 3.学生选课
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1, 1);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1, 2);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1, 3);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1, 4);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (1, 5);

INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (2, 1);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (2, 2);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (2, 3);

INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (4, 1);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (4, 3);
INSERT INTO `students_select_courses` (students_id, courses_id) VALUES (4, 4);


# 4.查询需求
# 4.1. 查询所有以选课的学生
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csID, cs.name csName, cs.price csPrice
FROM `students` stu 
JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
JOIN `courses` cs ON ssc.courses_id = cs.id;

# 4.2. 查询所有学生的选课情况
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csID, cs.name csName, cs.price csPrice
FROM `students` stu 
LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
LEFT JOIN `courses` cs ON ssc.courses_id = cs.id;

# 4.3. 查询没有选课的学生
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csID, cs.name csName, cs.price csPrice
FROM `students` stu 
LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
LEFT JOIN `courses` cs ON ssc.courses_id = cs.id
WHERE cs.id IS NULL;

# 4.4. 查询哪些课程是没被选的
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csID, cs.name csName, cs.price csPrice
FROM `students` stu 
RIGHT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
RIGHT JOIN `courses` cs ON ssc.courses_id = cs.id
WHERE stu.id IS NULL;

# 4.5. 查询某个学生选课情况 (hxl)
SELECT stu.id id, stu.name stuName, stu.age stuAge, cs.id csId, cs.name csName, cs.price csPrice
FROM `students` stu
LEFT JOIN `students_select_courses` ssc ON stu.id = ssc.students_id
LEFT JOIN `courses` cs ON ssc.courses_id = cs.id
WHERE stu.id = 1;  
























