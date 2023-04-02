import express from "express";
import {
  updateTicker,
  getTicker,
  scheduler,
} from "../controller/wazirx_ticker.js";

const router = express.Router();

router.post("/", updateTicker);
// Start the scheduler
scheduler.start();
router.get("/", getTicker);

export default router;
