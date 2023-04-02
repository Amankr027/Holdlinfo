import Client_pkg from "pg";
const { Client } = Client_pkg;
const client = new Client({
  user: process.env.user,
  password: process.env.password,
  host: "localhost",
  port: 5432,
  database: "wazirx_ticker",
});

export default client;
