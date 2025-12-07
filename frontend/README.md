# 📌 Overview

The frontend of the Retail Sales Management System is a React-based dashboard that displays sales records with real-time search, filtering, sorting, pagination, and summary analytics. The UI replicates a modern enterprise dashboard using Tailwind CSS and modular reusable components. It consumes backend APIs and renders data in a clean, interactive table layout.

---

# 🛠 Tech Stack

* **React.js (Vite)**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **Custom Hooks (useFilters)**
* **Reusable UI Components (FiltersBar, StatsBar, SalesTable, Pagination)**
* **REST API Integration**

---

# 🔍 Search Implementation Summary

Search is implemented in the top navigation bar.
It filters data based on:

* **Customer Name**
* **Phone Number**

Search is case-insensitive and matches partial text. The search executes before pagination, ensuring accurate row counts and results.

---

# 🎯 Filter Implementation Summary

Filters are managed through a centralized hook `useFilters()` and include:

* Customer Region
* Gender
* Age Range
* Product Category
* Tags
* Payment Method
* Date Range

Each filter updates the state via `setFilter()`, and results are recalculated instantly. Filters are applied cumulatively (AND logic).

---

# ↕ Sorting Implementation Summary

Sorting is controlled via a dropdown and supports:

* Customer Name (A–Z)
* Customer Name (Z–A)
* Date (Latest First)

Sorting is applied on the **filtered dataset**, ensuring consistent results.

---

# 📄 Pagination Implementation Summary

Pagination uses:

* `currentPage` state
* `rowsPerPage = 10`
* Slicing logic based on page index

It recalculates after search, filters, and sorting.
The UI displays clickable page numbers with active highlighting.

---

# ⚙️ Setup Instructions

1. Clone the repository

2. Navigate to the frontend folder

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. (Optional) Configure backend API base URL in environment or config file

6. Build for production:

   ```bash
   npm run build
   ```

