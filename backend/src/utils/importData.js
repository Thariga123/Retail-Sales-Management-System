import mongoose from "mongoose";
import fs from "fs";
import csv from "csv-parser";
import dotenv from "dotenv";
import SalesRecord from "../models/Sales.js";

dotenv.config();

const filePath = "./src/data/sales.csv";
const BATCH_SIZE = 500;

const safeNum = (v) => (v && !isNaN(v) ? Number(v) : null);
const safeDate = (v) => {
  const d = new Date(v);
  return !isNaN(d) ? d : null;
};

const importCSV = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    let batch = [];
    let count = 0;

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => {
        try {
          const record = {
            date: safeDate(row["Date"]),
            customerName: row["Customer Name"] || null,
            phoneNumber: row["Phone Number"] || null,
            gender: row["Gender"] || null,
            age: safeNum(row["Age"]),
            customerRegion: row["Customer Region"] || null,
            customerType: row["Customer Type"] || null,
            productCategory: row["Product Category"] || null,
            productName: row["Product Name"] || null,
            brand: row["Brand"] || null,
            tags: row["Tags"]
              ? row["Tags"].replace(/"/g, "").split(",").map(t => t.trim())
              : [],
            quantity: safeNum(row["Quantity"]),
            pricePerUnit: safeNum(row["Price Per Unit"]),
            discount: safeNum(row["Discount"]),
            totalAmount: safeNum(row["Total Amount"]),
            finalAmount: safeNum(row["Final Amount"]),
            paymentMethod: row["Payment Method"] || null,
            orderStatus: row["Order Status"] || null,
            deliveryType: row["Delivery Type"] || null,
            storeLocation: row["Store Location"] || null,
            employeeName: row["Employee Name"] || null,
          };

          batch.push(record);

          if (batch.length === BATCH_SIZE) {
            SalesRecord.insertMany(batch, { ordered: false });
            count += batch.length;
            console.log(`Inserted ${count}...`);
            batch = [];
          }
        } catch {
          console.log("Invalid row skipped");
        }
      })
      .on("end", async () => {
        if (batch.length > 0) {
          await SalesRecord.insertMany(batch, { ordered: false });
          count += batch.length;
        }
        console.log(`CSV Import Completed ✔ Total: ${count}`);
        process.exit();
      })
      .on("error", (err) => {
        console.error("CSV Read Error:", err);
        process.exit(1);
      });
  } catch (err) {
    console.error("Import Error:", err);
    process.exit(1);
  }
};

importCSV();
