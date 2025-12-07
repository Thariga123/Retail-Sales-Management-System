## 📌 Retail Sales Management System

A full-stack MERN application to analyze retail sales trends. Users can search, filter, sort, and paginate sales records retrieved from MongoDB. The dashboard offers analytical KPIs, a responsive data table, and a modern UI.

---

## 🚀 Tech Stack

### **Frontend**

| Library      | Purpose           |
| ------------ | ----------------- |
| React + Vite | UI Framework      |
| Tailwind CSS | Styling           |
| Axios        | API communication |

### **Backend**

| Component  | Purpose          |
| ---------- | ---------------- |
| Node.js    | Server runtime   |
| Express.js | REST API routing |
| MongoDB    | Database         |
| Mongoose   | ORM              |
| CSV Parser | Bulk data import |

---

## 🔍 API Features

| Feature    | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| Search     | Search by customer name or phone number                              |
| Filter     | Filter by region, gender, age, category, tags, payment method        |
| Sorting    | Sort by latest date, customer name, or quantity                      |
| Pagination | 10 records per page, API-level pagination                            |
| Statistics | Auto-calculated KPIs: Total units sold, total amount, total discount |

---

## 🔎 Search Implementation Summary

Search works on backend using regex:

```js
filter.$or = [
  { customerName: { $regex: search, $options: "i" } },
  { phoneNumber: { $regex: search, $options: "i" } }
];
```

Frontend passes `search` as query param → backend returns filtered results.

---

## 🧩 Filter Implementation Summary

Every filter (region, gender, category, tags, payment, date, age range) is processed on backend via:

```js
if (region) filter.customerRegion = { $in: region.split(",") };
if (gender) filter.gender = { $in: gender.split(",") };
if (tags) filter.tags = { $in: tags.split(",") };
```

UI dropdowns simply send selected values to backend — no filtering is done on frontend.

---

## ↕ Sorting Implementation Summary

Sorting is performed server-side based on `sortBy` query:

```js
if (sortBy === "date") sort.date = -1;
if (sortBy === "quantity") sort.quantity = -1;
if (sortBy === "customerName") sort.customerName = 1;
```

---

## 📄 Pagination Implementation Summary

Pagination is **not UI based** — it’s done in backend using `.skip()` & `.limit()`:

```js
const limit = 10;
const skip = (page - 1) * limit;
```

API returns:

```
records + total + totalPages
```

Frontend shows real-time page switching.

---

## 🛠 Setup Instructions

### 🔹 Clone repo

```sh
git clone https://github.com/Thariga123/Retail-Sales-Management-System.git
cd Retail-Sales-Management-System
```

### 🔹 Backend Setup

```sh
cd backend
npm install
```

Create `.env`:

```
MONGO_URI=YOUR_MONGODB_URL
PORT=5000
```

📌 To import CSV dataset:

```sh
npm run import
```

Start backend:

```sh
npm start
```

---

### 🔹 Frontend Setup

```sh
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## ✔ Application Flow

| Step | Action                                               |
| ---- | ---------------------------------------------------- |
| 1    | User applies search, filters, sorting, or pagination |
| 2    | Frontend sends query params to backend               |
| 3    | Backend responds with filtered results + metrics     |
| 4    | UI updates dashboard table & stats bar               |

---

## 🎯 Final Result

The system successfully enables:
✔ Fast querying of 100000+ sales records
✔ Efficient filter & sort without UI performance issues
✔ A professional dashboard with analytics and scalable API
