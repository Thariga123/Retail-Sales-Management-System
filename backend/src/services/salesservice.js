import SalesRecord from "../models/Sales.js";

export const getSalesData = async (query) => {
  const {
    search,
    region,
    gender,
    ageMin,
    ageMax,
    category,
    tags,
    payment,
    startDate,
    endDate,
    sortBy,
    page = 1
  } = query;

  let filter = {};

  if (search) {
    filter.$or = [
      { customerName: { $regex: search, $options: "i" } },
      { phoneNumber: { $regex: search, $options: "i" } }
    ];
  }

  if (region) filter.customerRegion = { $in: region.split(",") };
  if (gender) filter.gender = { $in: gender.split(",") };
  if (category) filter.productCategory = { $in: category.split(",") };
  if (payment) filter.paymentMethod = { $in: payment.split(",") };

  if (tags)
    filter.tags = {
      $in: tags.split(",").map((t) => new RegExp(t.trim(), "i"))
    };

  if (ageMin || ageMax) {
    filter.age = {};
    if (ageMin) filter.age.$gte = Number(ageMin);
    if (ageMax) filter.age.$lte = Number(ageMax);
  }

  if (startDate || endDate) {
    filter.date = {};
    if (startDate) filter.date.$gte = new Date(startDate);
    if (endDate) filter.date.$lte = new Date(endDate);
  }

  let sort = { date: -1 }; // default
  if (sortBy === "quantity") sort = { quantity: -1 };
  if (sortBy === "customerName") sort = { customerName: 1 };

  const limit = 10;
  const skip = (page - 1) * limit;

  const records = await SalesRecord.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const total = await SalesRecord.countDocuments(filter);

  return { records, total, page, totalPages: Math.ceil(total / limit) };
};
