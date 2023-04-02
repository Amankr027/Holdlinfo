CREATE DATABASE wazirx_ticker;

CREATE TABLE ticker(
    id SERIAL PRIMARY KEY,
    crypt_name VARCHAR(10) NOT NULL,
    last_price NUMERIC(20,8) NOT NULL,
    buy NUMERIC(20,8) NOT NULL,
    sell NUMERIC(20,8) NOT NULL,
    volume NUMERIC(20,8) NOT NULL,
    base_unit VARCHAR(10) NOT NULL
);
