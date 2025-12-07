import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
  customerName: String,
  phoneNumber: String,
  customerRegion: String,
  gender: String,
  age: Number,
  productCategory: String,
  tags: [String],
  quantity: Number,
  date: Date,
  paymentMethod: String,
});

// Recommended indexes
SalesSchema.index({ customerName: 1 });
SalesSchema.index({ phoneNumber: 1 });
SalesSchema.index({ date: -1 });
SalesSchema.index({ customerRegion: 1 });
SalesSchema.index({ productCategory: 1 });

export default mongoose.model("SalesRecord", SalesSchema);
