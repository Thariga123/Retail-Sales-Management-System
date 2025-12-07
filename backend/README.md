## 📌 Overview

The backend of the Retail Sales Management System provides REST APIs to retrieve sales records with search, filtering, sorting, and pagination. The data is stored in MongoDB and imported from a CSV file. The backend powers real-time analytics and sales insights for the application.

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* CSV Parsing (import script)

## 🔍 Search Implementation Summary

Search is implemented using `$or` queries to match both `customerName` and `phoneNumber`. Search is case-insensitive using regex so results match partially and without exact spelling.

## 🎯 Filter Implementation Summary

Filters include multiple query parameters such as:

* Region, Gender, Product Category, Tags, and Payment Method using `$in`
* Age range using `$gte` and `$lte`
* Date range using `$gte` and `$lte`

## ↕ Sorting Implementation Summary

Sorting is based on URL `sortBy` parameter. Supported sort fields include:

* `date` (latest first)
* `quantity` (highest first)
* `customerName` (A–Z)

## 📄 Pagination Implementation Summary

Pagination uses:

* `page` query parameter
* `limit = 10` records per page
  Returns `total` records and `totalPages` for frontend navigation.

## ⚙️ Setup Instructions

1. Clone the repository
2. Navigate to backend folder
3. Install dependencies

   ```
   npm install
   ```
4. Add `.env` file with:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```
5. Import CSV (only once)

   ```
   npm run import
   ```
6. Start the backend

   ```
   npm start
   ```
7. Base API endpoint

   ```
   http://localhost:5000/api/sales
   ```
