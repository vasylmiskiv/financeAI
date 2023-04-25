import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const kpis = await Transaction.find().limit(50).sort({ createdOn: -1 });
    res.status(200).json(kpis);
  } catch (err) {
    res.state(404).json({ message: err.message });
  }
});

export default router;
