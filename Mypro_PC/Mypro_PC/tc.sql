SET NAMES UTF8;
DROP DATABASE IF EXISTS tc;
CREATE DATABASE tc CHARSET=UTF8;
USE tc;


/**用户信息**/
CREATE TABLE tc_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),#用户名，如王小明
  upwd VARCHAR(32)
);

/****首页商品:选项分类****/
CREATE TABLE tc_index_type(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20)
);

/****首页商品:选项****/
CREATE TABLE tc_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  tid INT
);

/****首页:楼层产品图片****/
CREATE TABLE tc_index_img(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  href VARCHAR(128),
  fid  INT
);
/*******************/
/******数据导入******/
/*******************/

/**用户信息**/
INSERT INTO tc_user VALUES
(NULL, 'dingding', '123456'),
(NULL, 'dangdang', '123456');

INSERT INTO tc_index_type VALUES
(1, '精选美食'),
(2, '藏区特产'),
(3, '地标水果'),
(4, '销量冠军'),
(5, '今日上新');

/****首页商品:选项****/
INSERT INTO tc_index_product VALUES
(NULL,'【康养汶川特产专区】万村枇杷','img/1.jpg','25','details.html',1),
(NULL,'【康养汶川特产专区】七盘沟村枇杷','img/2.jpg','25','details.html',1),
(NULL,'【康养汶川特产专区】东界脑村车厘子','img/3.jpg','30','details.html',1),
(NULL,'【康养汶川特产专区】麦地村车厘子','img/4.jpg','30','details.html',1),
(NULL,'【康养汶川特产专区】七盘沟村草莓','img/5.jpg','12','details.html',1),
(NULL,'有机牦牛奶','img/11.jpg','7','details.html',2),
(NULL,'藏香猪香肠川味','img/22.jpg','69','details.html',2),
(NULL,' 五香味酱卤牦牛肉','img/33.jpg','179','details.html',2),
(NULL,'藏香猪鲜肉','img/44.jpg','29','details.html',2),
(NULL,'手撕牦牛肉','img/55.jpg','169','details.html',2),
(NULL,'车厘子果酒','img/111.jpg','199','details.html',3),
(NULL,'佳山苹果','img/222.jpg','7','details.html',3),
(NULL,'青脆李','img/333.jpg','10','details.html',3),
(NULL,'红脆李','img/444.jpg','19','details.html',3),
(NULL,'车厘子','img/555.jpg','69','details.html',3),
(NULL,'森林土公鸡','img/1111.jpg','299','details.html',4),
(NULL,'藏香猪香肠川味','img/2222.jpg','69','details.html',4),
(NULL,'百花蜜','img/3333.jpg','69','details.html',4),
(NULL,'红脆李','img/4444.jpg','19','details.html',4),
(NULL,'花椒','img/5555.jpg','49','details.html',4),
(NULL,'原生态土鸡蛋','img/6.jpg','20','details.html',5),
(NULL,'野生松茸','img/7.jpg','266','details.html',5),
(NULL,'青杠木耳','img/8.jpg','88','details.html',5),
(NULL,'【阿坝州特产】 牦牛牛腩2000g 新鲜牛肉四川特产顺丰发货','img/9.png','199','details.html',5),
(NULL,'车厘子','img/10.png','78','details.html',5);

/****首页:楼层产品图片****/
INSERT INTO tc_index_img VALUES
(NULL,'img/rou.jpg','details.html',1),
(NULL,'img/rou2.jpg','details.html',1),
(NULL,'img/rou3.jpg','details.html',1),
(NULL,'img/hetao.jpg','details.html',1),
(NULL,'img/jiang.jpg','details.html',1),
(NULL,'img/haoyou.jpg','details.html',1),
(NULL,'img/green1.jpg','details.html',2),
(NULL,'img/apple.jpg','details.html',2),
(NULL,'img/redli.jpg','details.html',2),
(NULL,'img/green2.jpg','details.html',2),
(NULL,'img/greenli.jpg','details.html',2),
(NULL,'img/green3.jpg','details.html',2),
(NULL,'img/chicken.jpg','details.html',3),
(NULL,'img/wuhua.jpg','details.html',3),
(NULL,'img/egg.jpg','details.html',3),
(NULL,'img/rou2.jpg','details.html',3),
(NULL,'img/rou.jpg','details.html',3),
(NULL,'img/rou3.jpg','details.html',3),
(NULL,'img/suan.jpg','details.html',4),
(NULL,'img/drink.jpg','details.html',4),
(NULL,'img/drink1.jpg','details.html',4),
(NULL,'img/mikl2.jpg','details.html',4),
(NULL,'img/tea.jpg','details.html',4),
(NULL,'img/fengmi2.jpg','details.html',4);
