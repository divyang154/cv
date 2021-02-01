CREATE TABLE `user_tb` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `created_by` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `user_tb` (`user_id`,`created_by`,`created_on`,`password`,`updated_by`,`updated_on`,`user_email`,`user_role`,`username`) VALUES (1,NULL,'2020-12-17 13:15:38','admission',NULL,'2020-12-17 13:15:38','acharyadivyang789@gmail.com','Administrator','flyadmin');

CREATE TABLE `foodItems` (
  `food_items_id` integer NOT NULL AUTO_INCREMENT,
  `food_item_cost` double precision ,
  `food_item_name` varchar(255) ,
  PRIMARY KEY (`food_items_id`)
);

CREATE TABLE `food_items_order` (
  `order_id` integer NOT NULL AUTO_INCREMENT,
  `ordered_by_user_id` int ,
  `food_item_order_str` varchar(255) ,
  `order_date` datetime DEFAULT NULL,
  PRIMARY KEY (`order_id`)
);
