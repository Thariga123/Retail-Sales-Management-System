import { getSalesData } from "../services/salesservice.js";

export const getSales = async (req, res) => {
  try {
    const data = await getSalesData(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
