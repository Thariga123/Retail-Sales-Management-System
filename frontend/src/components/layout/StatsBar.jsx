import React from "react";

const StatsBar = ({ data }) => {
  const rows = Array.isArray(data) ? data : [];

  const totalUnits = rows.reduce(
    (acc, row) => acc + (Number(row?.quantity) || 0),
    0
  );
  const totalAmount = rows.reduce(
    (acc, row) => acc + (Number(row?.amount) || 0),
    0
  );
  const totalDiscount = rows.reduce(
    (acc, row) => acc + (Number(row?.discount) || 0),
    0
  );

  // Card component with exact Figma colors
  const Card = ({ label, value, extra }) => (
    <div
      className="
        flex flex-1 flex-col justify-between 
        rounded-[8px] 
        border 
        border-[#E5D9C5] 
        bg-[#f7ebd6] 
        px-4 py-3 
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium text-slate-700">{label}</p>

        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-600 text-[10px] text-gray-600">
          i
        </span>
      </div>

      <p className="mt-2 text-[13px] font-semibold text-slate-900">{value}</p>

      {extra && (
        <p className="mt-1 text-[11px] font-semibold text-slate-700">
          {extra}
        </p>
      )}
    </div>
  );

  return (
  <div className="flex gap-3 w-1/2 text-[11px] h-[60px]">
    <Card label="Total units sold" value={totalUnits} />

    <Card
      label="Total Amount"
      value={
        <span className="flex items-center gap-1">
          ₹{totalAmount.toLocaleString("en-IN")}
          <span className="text-[10px] text-slate-600">(19 SRs)</span>
        </span>
      }
    />

    <Card
      label="Total Discount"
      value={
        <span className="flex items-center gap-1">
          ₹{totalDiscount.toLocaleString("en-IN")}
          <span className="text-[10px] text-slate-600">(45 SRs)</span>
        </span>
      }
    />
  </div>
);

};

export default StatsBar;
