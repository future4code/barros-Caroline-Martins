-- Active: 1674084192186@@35.226.146.116@3306@jbl-4416152-caroline-martins

CREATE TABLE IF NOT EXISTS Cripto_user (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Auth_tasks (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Auth_users(id)
);

CREATE TABLE IF NOT EXISTS Auth_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES Auth_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES Auth_users(id)
);
ALTER TABLE  `Cripto_user` ADD role ENUM("ADMIN","NORMAL") NOT NULL DEFAULT "NORMAL";

