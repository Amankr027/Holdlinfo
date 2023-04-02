import express from "express";
import dotenv from "dotenv";
import tickerRoutes from "./routes/wazirx_ticker.js";
import client from "./db.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

app.use("/", tickerRoutes);
// app.get("/", (req, res) => {});

client.connect();

client.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Connected to PostgreSQL at ${client.host}:${client.port}`);
  console.log(`PostgreSQL version: ${res.rows[0].version}`);
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
