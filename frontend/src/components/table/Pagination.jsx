import React from "react";

const Pagination = ({ currentPage, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  const maxVisible = 3;

  const start = Math.max(1, currentPage - maxVisible);
  const end = Math.min(totalPages, currentPage + maxVisible);

  if (start > 1) pages.push(1);
  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) pages.push(i);

  if (end < totalPages - 1) pages.push("...");
  if (end < totalPages) pages.push(totalPages);

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
      >
        Prev
      </button>

      {pages.map((p, idx) => (
        <button
          key={idx}
          onClick={() => p !== "..." && onChange(p)}
          disabled={p === "..."}
          className={`px-3 py-1 rounded ${
            p === currentPage
              ? "bg-black text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
