/* Creating DB named newprogrammers and with the encoding utf8 */
CREATE DATABASE IF NOT EXISTS newprogrammers CHARACTER SET utf8 COLLATE utf8_unicode_ci;

/* Using DB */
USE newprogrammers

/* Creating Table users with the encoding utf8 */
CREATE TABLE IF NOT EXISTS login_nodejs_users(
    id              INT(5) AUTO_INCREMENT NOT NULL,
    first_name      VARCHAR(100) NOT NULL,
    last_name       VARCHAR(100) NOT NULL,
    username        VARCHAR(100) NOT NULL,
    password        VARCHAR(255) NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE='InnoDB' CHARACTER SET utf8 COLLATE utf8_unicode_ci;