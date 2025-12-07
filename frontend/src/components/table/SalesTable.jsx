import React from "react";
import { formatDate } from "../../utils/formatters";

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

const IconRedo = () => (
  <svg
    className="h-3.5 w-3.5 text-slate-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path
      d="M15 7h4v4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 17a6 6 0 0 1 9.5-4.7L19 11"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SalesTable = ({ rows = [], currentPage = 1, perPage = 10 }) => {
  const startIndex = (currentPage - 1) * perPage;
  const visibleRows = rows.slice(startIndex, startIndex + perPage);

  return (
    <table className="min-w-full border-collapse text-[12px]">
      <thead>
        <tr className="bg-[#f8fafc]">
          {headers.map((h) => (
            <th
              key={h}
              className="border-b border-slate-200 px-4 py-2 text-left text-[11px] font-medium text-slate-500"
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
            <td className="border-b border-slate-100 px-4 py-2">
              {row.id}
            </td>
            <td className="border-b border-slate-100 px-4 py-2">
              {formatDate(row.date)}
            </td>
            <td className="border-b border-slate-100 px-4 py-2">
              {row.customerId}
            </td>
            <td className="border-b border-slate-100 px-4 py-2">
              {row.customerName}
            </td>

            {/* Phone + icon */}
            <td className="border-b border-slate-100 px-4 py-2">
              <div className="flex items-center gap-2">
                <span>{row.phone}</span>
                <button
                  type="button"
                  className="rounded-full p-0.5 hover:bg-slate-100"
                  title="Copy phone"
                >
                  <IconRedo />
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
