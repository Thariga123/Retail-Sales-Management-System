import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import FiltersBar from "../components/layout/FiltersBar";
import StatsBar from "../components/layout/StatsBar";
import SalesTable from "../components/table/SalesTable";
import Pagination from "../components/table/Pagination";
import useFilters from "../hooks/useFilters";
import { salesData } from "../services/salesData";

const SalesDashboard = () => {
  const {
    filters,
    setFilter,
    filteredData,
    currentPage,
    totalPages,
    setPage,
  } = useFilters(salesData, 10);

  return (
    <div className="flex h-screen bg-[#f5efe0] text-slate-900">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <Topbar />

        <section className="flex-1 overflow-y-auto px-8 pb-6 pt-3">
          <div className="mx-auto max-w-[1160px]">
            {/* Title right under search, like Figma */}


            {/* Beige block: filters + stats */}
            <div className="rounded-t-[4px] border border-slate-200 border-b-0 bg-[#f7ebd6]">
              <div className="px-3 pt-3">
                <FiltersBar filters={filters} setFilter={setFilter} />
              </div>

              <div className="px-3 pb-3 pt-2">
                <StatsBar data={filteredData ?? []} />
              </div>
            </div>

            {/* White table block sharing same border */}
            <div className="overflow-hidden rounded-b-[4px] border border-slate-200 bg-white">
              <SalesTable
                rows={filteredData ?? []}
                currentPage={currentPage}
                perPage={10}
              />
            </div>

            <div className="mt-3 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChange={setPage}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SalesDashboard;
