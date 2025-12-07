import React from "react";

const baseSelect =
  "h-8 rounded-[3px] border border-slate-300 bg-white px-3 text-[11px] text-slate-700 outline-none shadow-sm";

const FiltersBar = ({ filters, setFilter }) => {
  return (
    <div className="mb-1 flex flex-wrap items-center gap-3 text-[11px]">
      <select
        className={baseSelect}
        value={filters.region}
        onChange={(e) => setFilter("region", e.target.value)}
      >
        <option>Customer Region</option>
        <option>North</option>
        <option>South</option>
        <option>East</option>
        <option>West</option>
      </select>

      <select
        className={baseSelect}
        value={filters.gender}
        onChange={(e) => setFilter("gender", e.target.value)}
      >
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        className={baseSelect}
        value={filters.ageRange}
        onChange={(e) => setFilter("ageRange", e.target.value)}
      >
        <option>Age Range</option>
        <option>18-24</option>
        <option>25-34</option>
        <option>35-44</option>
      </select>

      <select
        className={baseSelect}
        value={filters.category}
        onChange={(e) => setFilter("category", e.target.value)}
      >
        <option>Product Category</option>
        <option>Clothing</option>
        <option>Electronics</option>
        <option>Grocery</option>
      </select>

      <select
        className={baseSelect}
        value={filters.tags}
        onChange={(e) => setFilter("tags", e.target.value)}
      >
        <option>Tags</option>
        <option>Loyal</option>
        <option>New</option>
      </select>

      <select
        className={baseSelect}
        value={filters.payment}
        onChange={(e) => setFilter("payment", e.target.value)}
      >
        <option>Payment Method</option>
        <option>UPI</option>
        <option>Card</option>
        <option>Cash</option>
      </select>

      <select
        className={baseSelect}
        value={filters.date}
        onChange={(e) => setFilter("date", e.target.value)}
      >
        <option>Date</option>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
      </select>

      <div className="ml-auto">
        <select
          className={baseSelect}
          value={filters.sort}
          onChange={(e) => setFilter("sort", e.target.value)}
        >
          <option>Sort by: Customer Name (A-Z)</option>
          <option>Customer Name (Z-A)</option>
          <option>Latest Date</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersBar;
