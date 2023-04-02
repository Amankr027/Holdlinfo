import fetch from "node-fetch";
import client from "../db.js";
import cron from "node-cron";

const updateTicker = async (req, res) => {
  let data;
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    if (response.status !== 200) {
      throw new Error("Error in fetching data");
    }
    data = await response.json();
    data = Object.values(data).slice(0, 10);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
  try {
    // Check if there are values in the table
    const countQuery = "SELECT COUNT(*) FROM ticker";
    const count = await client.query(countQuery);

    // If there are no values in the table, insert all the values
    if (count.rows[0].count == 0) {
      const insertQuery =
        "INSERT INTO ticker (crypt_name, last_price, buy, sell, volume, base_unit) VALUES($1, $2, $3, $4, $5, $6)";
      data.forEach(async (item) => {
        await client.query(insertQuery, [
          item.name,
          item.last,
          item.buy,
          item.sell,
          item.volume,
          item.base_unit,
        ]);
      });
    } else {
      // If there are values in the table, update the values
      const updateQuery =
        "UPDATE ticker SET last_price = $1, buy = $2, sell = $3, volume = $4, base_unit = $5 WHERE crypt_name = $6";
      data.forEach(async (item) => {
        await client.query(updateQuery, [
          item.last,
          item.buy,
          item.sell,
          item.volume,
          item.base_unit,
          item.name,
        ]);
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const getTicker = async (req, res) => {
  try {
    const query = "SELECT * FROM ticker";
    const result = await client.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
  }
};
const scheduler = cron.schedule("* * * * *", async () => {
  try {
    await updateTicker();
    console.log("POST request sent successfully!");
  } catch (err) {
    console.error("Error:", err);
  }
});

export { updateTicker, getTicker, scheduler };
