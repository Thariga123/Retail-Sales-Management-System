import React from "react";

const Topbar = ({ setFilter }) => {
  return (
    <header className="flex h-12 items-center border-b border-slate-200 bg-white">
      <div className="flex w-full items-center px-6">

        {/* Title on the left */}
        <h1 className="text-[17px] font-semibold">
          Sales Management System
        </h1>

        {/* Search bar — moved to extreme right with no extra space */}
        <div className="ml-auto flex justify-end">
          <div className="flex w-[350px] items-center gap-2 rounded-[8px] border border-slate-300 bg-[#f9fafb] px-4 py-1.5 shadow-sm">
            <span className="text-slate-400 text-[13px]">🔍</span>
            <input
              className="w-full bg-transparent text-[13px] text-slate-700 outline-none placeholder:text-slate-400"
              placeholder="Name, Phone number"
              onChange={(e) => setFilter("search", e.target.value)}
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Topbar;
