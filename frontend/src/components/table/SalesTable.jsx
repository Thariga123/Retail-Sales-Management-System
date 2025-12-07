import React from "react";
import { formatDate, formatPhone } from "../../utils/formatters";

const headers = [
  "Transaction ID",
  "Date",
  "Customer ID",
  "Customer name",
  "Phone Number",
  "Gender",
  "Age",
  "Product Category",
  "Quantity",
];

const IconCopy = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-slate-500"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <rect x="2" y="2" width="13" height="13" rx="2" ry="2"></rect>
  </svg>
);

const SalesTable = ({ rows = [], currentPage = 1, perPage = 10 }) => {
  const startIndex = (currentPage - 1) * perPage;
  const visibleRows = rows.slice(startIndex, startIndex + perPage);

  const copyPhone = async (phone) => {
    const formatted = formatPhone(phone);
    try {
      await navigator.clipboard.writeText(formatted);
      // optional: toast / alert
      // console.log("Copied:", formatted);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <table className="min-w-full border-collapse text-[13px]">
      <thead>
        <tr className="bg-[#f8fafc]">
          {headers.map((h) => (
            <th
              key={h}
              className="border-b border-slate-200 px-4 py-2 text-left text-[13px] font-medium text-slate-500"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {visibleRows.map((row, idx) => (
          <tr
            key={`${row.id}-${idx}`}
            className="hover:bg-slate-50 transition-colors"
          >
            <td className="border-b border-slate-100 px-4 py-3 text-gray-500 font-semibold">
              {row.id}
            </td>
            <td className="border-b border-slate-100 px-4 py-3 text-gray-500 font-semibold">
              {formatDate(row.date)}
            </td>
            <td className="border-b border-slate-100 px-4 py-3">
              {row.customerId || "N/A"}
            </td>
            <td className="border-b border-slate-100 px-4 py-3">
              {row.customerName}
            </td>

            {/* Phone + exact copy icon */}
            <td className="border-b border-slate-100 px-4 py-3 text-gray-500 font-semibold">
              <div className="flex items-center gap-2">
                <span>{formatPhone(row.phone)}</span>
                <button
                  type="button"
                  onClick={() => copyPhone(row.phone)}
                  className="rounded-full p-0.5 hover:bg-slate-200 active:bg-slate-300 transition"
                  title="Copy phone number"
                >
                  <IconCopy />
                </button>
              </div>
            </td>

            <td className="border-b border-slate-100 px-4 py-2">
              {row.gender}
            </td>
            <td className="border-b border-slate-100 px-4 py-2">
              {row.age}
            </td>
            <td className="border-b border-slate-100 px-4 py-2 font-semibold">
              {row.category}
            </td>
            <td className="border-b border-slate-100 px-4 py-2 font-semibold">
              {String(row.quantity ?? 0).padStart(2, "0")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
