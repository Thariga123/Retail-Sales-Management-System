import React from "react";

const Topbar = () => {
  return (
    <header className="flex h-10 items-center border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1180px] items-center px-8">
        {/* left side (empty – Figma just has space) */}
        <header className="mb-2">
              <h1 className="text-[15px] font-semibold">
                Sales Management System
              </h1>
            </header>
        <div className="flex-1" />
        

        {/* search bar */}
        <div className="flex flex-1 justify-center">

          <div className="flex w-[520px] items-center gap-2 rounded-full border border-slate-300 bg-[#f9fafb] px-4 py-1.5 text-xs shadow-sm">
            <span className="text-slate-400 text-[13px]">🔍</span>
            <input
              className="w-full bg-transparent text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
              placeholder="Name, Phone no."
            />
          </div>
        </div>

   
        
      </div>
    </header>
  );
};

export default Topbar;
