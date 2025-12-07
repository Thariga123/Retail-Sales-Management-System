import API from "./api";

export const getSales = async (filters) => {
  const res = await API.get("/sales", { params: filters });

  const rows = res.data.records.map((item) => ({
  id: item._id,
  customerId: item.customerId || "N/A",
  date: item.date,
  customerName: item.customerName,
  phone: item.phoneNumber,
  gender: item.gender,
  age: item.age,
  category: item.productCategory,
  quantity: item.quantity,
  region: item.customerRegion,
  paymentMethod: item.paymentMethod,

  // 🔥 Correct fields for StatsBar
  amount: Number(item.finalAmount ?? item.totalAmount ?? 0),
  discount: Number(item.discount ?? 0),
}));


  return {
    rows,
    total: res.data.total,
    totalPages: res.data.totalPages,
  };
};
