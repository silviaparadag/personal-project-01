CREATE TABLE `freedb_travelguide`.`cities` (
  `idcity` INT NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(45) NOT NULL,
  `city_desc_short` VARCHAR(1024) NOT NULL,
  `city_desc_long` MEDIUMTEXT NULL,
  `city_img` LONGTEXT NOT NULL,
  PRIMARY KEY (`idcity`),
  UNIQUE INDEX `idcity_UNIQUE` (`idcity` ASC) VISIBLE,
  UNIQUE INDEX `city_name_UNIQUE` (`city_name` ASC) VISIBLE);
