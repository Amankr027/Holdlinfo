import Client_pkg from "pg";
const { Client } = Client_pkg;
const client = new Client({
  user: "postgres",
  password: "ak123",
  host: "localhost",
  port: 5432,
  database: "wazirx_ticker",
});

export default client;
