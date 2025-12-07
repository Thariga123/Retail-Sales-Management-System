import React from "react";

const Pagination = ({ currentPage, totalPages, onChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`flex h-8 min-w-[32px] items-center justify-center rounded-md border text-[12px] ${
            p === currentPage
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
