SET NAMES UTF8;
DROP DATABASE IF EXISTS ty;
CREATE DATABASE ty CHARSET=UTF8;
USE ty;

#登陆
CREATE TABLE ty_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(11),
  upwd  VARCHAR(32)
);
INSERT INTO ty_login VALUES(null,18215632883,md5('123456'));

INSERT INTO ty_login VALUES(null,18215632882,md5('123456'));


#轮播图1
CREATE TABLE ty_banner1(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(25)
);
INSERT INTO ty_banner1 VALUES
(NULL,'c1.jpg'),
(NULL,'c2.jpg'),
(NULL,'c3.jpg'),
(NULL,'c4.jpg'),
(NULL,'c5.jpg'),
(NULL,'c6.jpg'),
(NULL,'c7.jpg'),
(NULL,'c8.jpg');

#轮播图2
CREATE TABLE ty_banner2(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(25),
  title VARCHAR(255),
  price DECIMAL(10,2)
);
INSERT INTO ty_banner2 VALUES
(NULL,'1.jpg',"五香味酱卤牦牛肉",179),
(NULL,'2.jpg',"藏香猪香肠川味",69),
(NULL,'3.jpg',"手撕牦牛肉",169),
(NULL,'4.jpg',"麦地村车厘子",30),
(NULL,'5.jpg',"万村枇杷",25),
(NULL,'6.jpg',"红脆李",15);


#首页:热卖产品
CREATE TABLE ty_sal(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(25),
  title VARCHAR(255),
  price DECIMAL(10,2)
);
INSERT INTO ty_sal VALUES
(NULL,'meat1.jpg',"130g盈泰带皮腿排（佳盈）",417),
(NULL,'meat2.jpg',"原味粒粒吉（正大） ",192),
(NULL,'meat3.png',"150g一号台湾卤肉（蒸烩煮）",209),
(NULL,'meat4.png',"170g南洋咖喱鸡肉（蒸烩煮）",198),
(NULL,'meat5.png',"170g香菇滑鸡（蒸烩煮）",197),
(NULL,'meat6.jpg',"170g辣子鸡（蒸烩煮）",192),
(NULL,'meat7.png',"170g美式黑胡椒炒牛肉（蒸烩煮）",284),
(NULL,'meat8.png',"170g新德里咖喱牛肉（蒸烩煮）",279);

#商品列表
CREATE TABLE ty_list(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(25),
  title VARCHAR(255),
  price DECIMAL(10,2),
  sal   INT,
  pid   INT
);
INSERT INTO ty_list VALUES
(NULL,'niu.jpg',"120g超值牛排（松洋）",573.0,1645,1),
(NULL,'293.png',"纯牛肉饼（元盛）",293.0,1650,5),
(NULL,'hei.jpg',"150g黑椒沙律牛排（元盛）",556.0,1505,7),
(NULL,'pi.jpg',"杀牛匠带皮牛肉",549.0,1440,8),
(NULL,'dian.jpg',"200g丁骨牛排（正点）",1158.0,1100,9),
(NULL,'sha.jpg',"200g沙朗牛排（正点）",874.0,1000,10),
(NULL,'tiao.jpg',"九承世家筷子牛肉",550.0,805,11),
(NULL,'shu.png',"裹粉直薯X7207-原S3001/X7205（蓝威）",258.0,800,12),
(NULL,'wa.jpg',"胖娃糍粑（鑫攀）",87.0,755,13),
(NULL,'si.jpg',"30g脆皮香蕉（千味央厨）",52.0,688,14);


#购物车
CREATE TABLE ty_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(25),
	title   VARCHAR(255),
  subtitle   VARCHAR(255),
  price   DECIMAL(10,2),
  count   INT,
  uid     INT
);
INSERT INTO ty_cart VALUES(null,'nopic.jpg','东北珍珠米','单位:件',121,1,1);
INSERT INTO ty_cart VALUES(null,'jun.jpg','新鲜羊肚菌2斤装','单位:件',180,1,1);
INSERT INTO ty_cart VALUES(null,'yang.jpg','法式羊排（顶善）','单位:件',822,1,1);
INSERT INTO ty_cart VALUES(null,'hei.jpg','150g黑椒沙律牛排（元盛）','单位:件',556,1,1);

#商品详情页

#1.轮播图
CREATE TABLE ty_banner(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(25),
  pid INT
);

INSERT INTO ty_banner VALUES
(NULL,'l1.jpg',1),
(NULL,'l2.png',1),
(NULL,'l3.png',1),
(NULL,'l21.png',5),
(NULL,'l22.png',5),
(NULL,'l23.png',5),
(NULL,'l31.jpg',7),
(NULL,'l32.png',7),
(NULL,'l33.png',7),
(NULL,'l41.jpg',8),
(NULL,'l42.jpg',8),
(NULL,'l43.jpg',8),
(NULL,'l51.jpg',9),
(NULL,'l52.jpg',9),
(NULL,'l53.jpg',9),
(NULL,'l61.jpg',10),
(NULL,'l62.jpg',10),
(NULL,'l63.jpg',10),
(NULL,'l71.jpg',11),
(NULL,'l72.jpg',11),
(NULL,'l73.jpg',11),
(NULL,'l81.png',12),
(NULL,'l82.png',12),
(NULL,'l83.png',12),
(NULL,'91.jpg',13),
(NULL,'92.jpg',13),
(NULL,'93.jpg',13),
(NULL,'101.jpg',14),
(NULL,'102.png',14),
(NULL,'103.png',14);

#2.商品详情
CREATE TABLE ty_details(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title   VARCHAR(128),
  price DECIMAL(10,2),
  detail  VARCHAR(1024),
  spec VARCHAR(64),
  count INT,
  pid INT
);
INSERT INTO ty_details VALUES
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,1),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,5),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,7),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,8),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,9),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,10),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,11),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,12),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,13),
(NULL,'120g超值牛排（松洋）',573,'120g超值牛排（松洋）选用精心饲养的上等牛肉制作而成，无需再次腌制。牛排口感紧实，椒香浓郁，口感松软，汁水多，唇齿留香，让人回味无穷。','70片*120g，8.4kg',1,14);


