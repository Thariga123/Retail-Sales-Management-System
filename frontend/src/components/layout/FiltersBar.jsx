import React from "react";

const baseSelect =
  "h-8 rounded-[3px] bg-[#f8fafc] px-3 text-[12px] font-semibold text-slate-700 outline-none shadow-sm";

const FiltersBar = ({ filters, setFilter, resetFilters }) => {
  const handleAge = (value) => {
    if (!value) return setFilter("ageMin", "") || setFilter("ageMax", "");
    const [min, max] = value.split("-");
    setFilter("ageMin", min);
    setFilter("ageMax", max);
  };

  const handleDatePreset = (value) => {
    const now = new Date();
    if (value === "7") {
      const start = new Date(now.setDate(now.getDate() - 7));
      setFilter("startDate", start.toISOString());
      setFilter("endDate", new Date().toISOString());
    } else if (value === "30") {
      const start = new Date(now.setDate(now.getDate() - 30));
      setFilter("startDate", start.toISOString());
      setFilter("endDate", new Date().toISOString());
    } else {
      setFilter("startDate", "");
      setFilter("endDate", "");
    }
  };

  return (
    <div className="mb-1 flex flex-wrap items-center gap-3 text-[11px]">
      {/* Customer Region */}
      <div className="flex items-center gap-2">

        {/* 🔄 Refresh button */}
        <button
          onClick={resetFilters}
          title="Reset filters"
          className="flex items-center justify-center rounded-md border border-slate-300 bg-[#f8fafc] px-2 py-[6px] shadow-sm hover:bg-slate-100"
        >
          🔄
        </button>

        <select
          className={baseSelect}
          value={filters.region || ""}
          onChange={(e) => setFilter("region", e.target.value)}
        >
          <option value="">Customer Region</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>

      <select className={baseSelect} onChange={(e) => setFilter("gender", e.target.value)}>
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select className={baseSelect} onChange={(e) => handleAge(e.target.value)}>
        <option value="">Age Range</option>
        <option value="18-24">18–24</option>
        <option value="25-34">25–34</option>
        <option value="35-44">35–44</option>
      </select>

      <select className={baseSelect} onChange={(e) => setFilter("category", e.target.value)}>
        <option value="">Product Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Grocery">Grocery</option>
      </select>

      <select className={baseSelect} onChange={(e) => setFilter("tags", e.target.value)}>
        <option value="">Tags</option>
        <option value="organic">Organic</option>
        <option value="makeup">Makeup</option>
        <option value="wireless">Wireless</option>
      </select>

      <select className={baseSelect} onChange={(e) => setFilter("payment", e.target.value)}>
        <option value="">Payment Method</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
        <option value="Cash">Cash</option>
      </select>

      <select className={baseSelect} onChange={(e) => handleDatePreset(e.target.value)}>
        <option value="">Date</option>
        <option value="7">Last 7 days</option>
        <option value="30">Last 30 days</option>
      </select>

      <div className="ml-auto">
        <select
          className={baseSelect}
          onChange={(e) => setFilter("sortBy", e.target.value)}
        >
          <option value="">Sort by:</option>
          <option value="customerName">Customer Name (A–Z)</option>
          <option value="date">Latest Date</option>
          <option value="quantity">Quantity (High → Low)</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersBar;
