DROP DATABASE IF EXISTS `AES`;
CREATE DATABASE `AES`;
USE `AES`;

CREATE TABLE `tablapadre` (
  `id_tpa` int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom_tpa` varchar(500) NOT NULL,
  `edad_tpa` int(11) NOT NULL,
  `dinero_tpa` float(5,4) NOT NULL,
  `date_tpa` datetime NOT NULL
)
