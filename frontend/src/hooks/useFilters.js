// src/hooks/useFilters.js
import { useMemo, useState } from "react";

const defaultFilters = {
  region: "",
  gender: "",
  ageRange: "",
  category: "",
  tags: "",
  payment: "",
  date: "",
  sort: "",
};

const useFilters = (data, perPage = 10) => {
  const [filters, setFilters] = useState(defaultFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const setFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    // right now this just returns data;
    // you can add filter logic based on filters.*
    let result = [...data];

    if (filters.gender) {
      result = result.filter(
        (row) => row.gender.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    if (filters.category) {
      if (filters.category !== "Product Category") {
        result = result.filter(
          (row) => row.category.toLowerCase() === filters.category.toLowerCase()
        );
      }
    }

    // Example sort by customer name
    if (filters.sort.includes("Customer Name")) {
      result.sort((a, b) =>
        a.customerName.localeCompare(b.customerName, "en")
      );
      if (filters.sort.includes("Z-A")) {
        result.reverse();
      }
    }

    return result;
  }, [data, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / perPage));

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return { filters, setFilter, filteredData, currentPage, totalPages, setPage };
};

export default useFilters;
