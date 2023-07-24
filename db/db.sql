CREATE TABLE `freedb_travelguide`.`cities` (
  `idcity` INT NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(45) NOT NULL,
  `city_desc_short` VARCHAR(1024) NOT NULL,
  `city_desc_long` MEDIUMTEXT NULL,
  `city_img` LONGTEXT NOT NULL,
  PRIMARY KEY (`idcity`),
  UNIQUE INDEX `idcity_UNIQUE` (`idcity` ASC) VISIBLE,
  UNIQUE INDEX `city_name_UNIQUE` (`city_name` ASC) VISIBLE);


INSERT INTO `freedb_travelguide`.`cities` (`city_name`, `city_desc_short`, `city_desc_long`, `city_img`) VALUES ('Copenhagen', 'Iure ullam quibusdam officiis repellat temporibus minima quos ex ipsam, illo non expedita animi excepturi, voluptatibus fuga corporis nisi? ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum velit debitis dicta doloribus consequuntur et ipsa, commodi voluptas? Et provident cupiditate similique? Rem libero praesentium assumenda quia nostrum sunt.\n               Aspernatur, quo molestias? Odio perferendis incidunt tenetur ab, quam consequatur eum odit vitae quod officia excepturi at sed nobis accusantium possimus est modi culpa voluptatem nostrum, ducimus quas. Perspiciatis, magnam.', 'http://localhost:4000/copenha');
