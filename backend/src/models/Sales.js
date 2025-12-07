import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
  customerName: String,
  customerId: String,
  phoneNumber: String,
  customerRegion: String,
  gender: String,
  age: Number,
  productCategory: String,
  tags: [String],
  quantity: Number,
  pricePerUnit: Number,
  discount: Number,
  totalAmount: Number,
  finalAmount: Number,
  date: Date,
  paymentMethod: String,
});

SalesSchema.index({ customerName: 1 });
SalesSchema.index({ phoneNumber: 1 });
SalesSchema.index({ date: -1 });
SalesSchema.index({ customerRegion: 1 });
SalesSchema.index({ productCategory: 1 });

export default mongoose.model("SalesRecord", SalesSchema);
