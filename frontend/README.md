1. Overview (3–5 lines)

This project is a React-based Sales Management Dashboard featuring filters, search, sorting, pagination, and dynamic stats calculations.
The UI replicates a Figma enterprise dashboard layout using Tailwind CSS.
Data is displayed in a clean table with stat cards, dropdown filters, and a sidebar-based navigation system.
The app is fully modular with reusable components and hooks.

2. Tech Stack

React.js (Vite)

Tailwind CSS

React Icons (optional for icons)

JavaScript

Custom Hooks (useFilters)

Static JSON Dataset (salesData.js)

3. Search Implementation Summary

Search is located in the Topbar.

It filters rows based on name or phone, matching partial keywords.

Search is case-insensitive and updates results instantly.

Runs before pagination so results are accurate.

4. Filter Implementation Summary

Filters include: Region, Gender, Age Range, Product Category, Tags, Payment Method, and Date.

Implemented using a custom hook useFilters() that stores all filter states.

Each dropdown triggers setFilter(key, value) which recalculates the filtered dataset.

Filtering is cumulative (multiple filters can be active together).

5. Sorting Implementation Summary

Sorting is applied using a dropdown (“Sort by: Customer Name A-Z”).

Sorting is executed on the filtered dataset, not the full dataset.

Available sort options:

Customer Name (A-Z)

Customer Name (Z-A)

Date (Latest first)

Sorting logic is part of useFilters().

6. Pagination Implementation Summary

Pagination is fully controlled by useFilters().

The dataset is sliced using:

const start = (currentPage - 1) * rowsPerPage;
const visibleRows = filteredData.slice(start, start + rowsPerPage);


Pagination updates after filters, search, and sorting.

UI shows page numbers with highlighting for the active page.

7. Setup Instructions
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
