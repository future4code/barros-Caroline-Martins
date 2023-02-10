-- Active: 1674084192186@@35.226.146.116@3306@jbl-4416152-caroline-martins
CREATE TABLE IF NOT EXISTS authentication_user (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

