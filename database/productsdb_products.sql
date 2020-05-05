-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: productsdb
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `Product_id` int NOT NULL AUTO_INCREMENT,
  `Product_Name` varchar(255) NOT NULL,
  `Department_id` int NOT NULL,
  `Price` int DEFAULT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `Department_id` (`Department_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`Department_id`) REFERENCES `departments` (`Department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'All Those Things We Never Said',1,200),(2,'Stories We Never Told',1,150),(3,'The Last Sister',1,400),(4,'Samsung Galaxy S20',3,9000),(5,'Samsung Galaxy A80',3,11500),(6,'Samsung Galaxy A30S',3,14000),(7,'Samsung Galaxy A71',3,7000),(8,'Samsung Galaxy A70',3,10500),(9,'Samsung Galaxy A20s ',3,12000),(10,'Tommy Hilfiger Mens Cambridge Passcase',4,2000),(11,'Tommy Hilfiger 31TL22X062251 Leather Wallet',4,1000),(12,'Tommy Hilfiger Mens Ranger Passcase',4,850),(13,'Tommy Hilfiger 5673/02 Leather Wallet',4,700),(14,'GUESS Factory Convertible Crossbody and Belt Bag',5,1500),(15,'Guess Floral Bag For Women',5,1200),(16,'Guess clutch SOUZA PATENT LOGO CLUTCH',5,2500),(17,'GUESS LOVE BIRD CROC EMBOSSED CROSSBODY',5,1200),(18,'G by Guess Bag For Women',5,2000),(19,'Gogo Faux Leather',5,1500),(20,'Woman Crochet Bag',5,850),(21,'Casio G-Shock GA-110GW',6,1700),(22,'Skmei 1251 watch black',6,1500),(23,'Ice Watch Analog Casual Watch',6,200),(24,'Q&Q Casual Watch for Unisex',6,1000),(25,'Tommy Hilfiger Casual Watch For Women Analog Rubber',6,1200);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-05 16:15:42
