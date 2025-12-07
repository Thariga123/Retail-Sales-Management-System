import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import FiltersBar from "../components/layout/FiltersBar";
import StatsBar from "../components/layout/StatsBar";
import SalesTable from "../components/table/SalesTable";
import Pagination from "../components/table/Pagination";
import { getSales } from "../services/salesData";

const SalesDashboard = () => {
  const [filters, setFilters] = useState({});
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const fetchData = async () => {
    const response = await getSales({ ...filters, page });
    setRows(response.rows); // <-- FIXED
    setTotalPages(response.totalPages);
  };

  useEffect(() => {
    fetchData();
  }, [filters, page]);

  return (
    <div className="flex h-screen bg-whitetext-slate-900">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <Topbar setFilter={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))} />

        <section className="flex-1 overflow-y-auto px-8 pb-6 pt-3">
          <div className="mx-auto max-w-[1160px]">
            <div className="rounded-t-[4px] border border-slate-200 border-b-0 bg-white">
              <div className="px-3 pt-3">
                <FiltersBar filters={filters} setFilter={handleFilterChange} />
              </div>
              <div className="px-3 pb-3 pt-2">
                <StatsBar data={rows} />
              </div>
            </div>

            <div className="overflow-hidden rounded-b-[4px] border border-slate-200 bg-white">
              <SalesTable rows={rows} />
            </div>

            <div className="mt-3 flex justify-center">
              <Pagination
                currentPage={page}
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
