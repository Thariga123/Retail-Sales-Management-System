// src/utils/formatters.js
export const formatDate = (value) => {
  if (!value) return "N/A";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "N/A";
  return d.toISOString().slice(0, 10);
};

export const formatCurrency = (value) => {
  if (!value) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPhone = (value) => {
  if (!value) return "N/A";

  // keep only digits
  let digits = String(value).replace(/\D/g, "");

  // if 10-digit Indian mobile, prepend 91
  if (digits.length === 10) {
    digits = "91" + digits;
  }

  // final format: +91 9798546789
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2)}`;
  }

  // fallback: return as-is
  return value;
};
