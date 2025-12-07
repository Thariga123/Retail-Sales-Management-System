## 🏗 Architecture Document — Retail Sales Management System

---

## 1️⃣ Backend Architecture

The backend follows a **REST API + Service Layer + Database Layer** architecture.

### **Key Responsibilities**

| Layer             | Responsibility                                           |
| ----------------- | -------------------------------------------------------- |
| Routes            | Receives API requests & maps them to controllers         |
| Controllers       | Validates requests & calls service logic                 |
| Services          | Business logic for search, filters, sorting & pagination |
| Database (Models) | Mongoose schemas for MongoDB                             |
| Utils             | CSV import utility for bulk storage                      |

### **Backend Workflow**

```
Client Request → Route → Controller → Service → MongoDB → Response JSON
```

---

## 2️⃣ Frontend Architecture

The frontend is developed in **React + Vite** using a **component-based modular structure**.

### **Core Responsibilities**

| Module             | Responsibility                            |
| ------------------ | ----------------------------------------- |
| Pages              | Main application screens                  |
| Components         | UI elements like tables, filters, navbars |
| Hooks              | Custom logic for state handling           |
| Services           | Axios API wrappers                        |
| Utils              | Formatting helpers                        |
| Context (optional) | Global state sharing                      |

### **Rendering Workflow**

```
UI Components → Trigger Filters/Sorting → API Call → JSON Response → Table + Stats Render
```

---

## 3️⃣ Data Flow Diagram

```
 ┌────────────┐
 │  Frontend  │
 │ React + UI │
 └─────┬──────┘
       │ Axios request with filters
       ▼
 ┌───────────────┐
 │   Backend     │
 │  Express API   │
 └──────┬────────┘
        │ passes query params
        ▼
 ┌───────────────┐
 │ Service Layer │
 │ Executes logic│
 └──────┬────────┘
        │ builds MongoDB query
        ▼
 ┌───────────────┐
 │   MongoDB     │
 │  SalesRecord  │
 └──────┬────────┘
        │ query result
        ▼
 ┌────────────┐
 │  Backend   │
 │  API JSON  │
 └─────┬──────┘
       │ response {records, total, totalPages}
       ▼
 ┌────────────┐
 │ Frontend UI│
 │ Table + KPIs│
 └────────────┘
```

---

## 4️⃣ Folder Structure

### 📌 Backend — `/backend`

```
backend/
 ├─ src/
 │  ├─ models/          → Mongoose schemas
 │  ├─ controllers/     → API controllers
 │  ├─ services/        → Business logic (search/filter/sort/pagination)
 │  ├─ routes/          → Express routes
 │  ├─ utils/           → CSV import script
 │  ├─ index.js         → App bootstrap
 ├─ .env
 ├─ package.json
```

### 📌 Frontend — `/frontend`

```
frontend/
 ├─ src/
 │  ├─ pages/           → Dashboard pages
 │  ├─ components/      → Reusable UI components
 │  ├─ hooks/           → Custom React hooks
 │  ├─ services/        → Axios API calls
 │  ├─ utils/           → Helper formatters
 │  ├─ App.jsx
 │  ├─ main.jsx
 ├─ .env
 ├─ package.json
```

---

## 5️⃣ Module Responsibilities

### 🔹 Backend Modules

| Module                            | Responsibility                              |
| --------------------------------- | ------------------------------------------- |
| `/routes/salesroute.js`           | Exposes `/api/sales` endpoint               |
| `/controllers/salescontroller.js` | Processes API requests & sends to service   |
| `/services/salesservice.js`       | Implements search, filter, sort, pagination |
| `/models/Sales.js`                | MongoDB schema for sales                    |
| `/utils/importData.js`            | Imports CSV file into MongoDB               |

### 🔹 Frontend Modules

| Module               | Responsibility                              |
| -------------------- | ------------------------------------------- |
| `FiltersBar.jsx`     | UI for setting filters                      |
| `StatsBar.jsx`       | Shows total units, total revenue, discounts |
| `SalesTable.jsx`     | Displays paginated table                    |
| `Pagination.jsx`     | Page navigation                             |
| `salesData.js`       | Axios wrapper for API                       |
| `SalesDashboard.jsx` | Main dashboard container                    |

---

## ✔ Final Summary

The system efficiently separates responsibilities:

| Backend                | Frontend           |
| ---------------------- | ------------------ |
| Data management        | Data visualization |
| Search & filters logic | UI interactions    |
| API response           | Axios consumption  |
| MongoDB                | React state        |

The architecture ensures:

* Scalability
* Clean separation between UI & logic
* Fast performance even with large CSV datasets
