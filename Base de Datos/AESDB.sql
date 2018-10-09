DROP DATABASE IF EXISTS `AES`;
CREATE DATABASE `AES`;
USE `AES`;

CREATE TABLE `tablapadre` (
  `id_tpa` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_tpa` varchar(500) NOT NULL,
  `cla_tpa` varchar(500) NOT NULL
);
