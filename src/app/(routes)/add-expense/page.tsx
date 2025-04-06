"use client";
import React, { useState } from "react";
import styles from "./add-expense.module.scss";
import Menu from "@/app/components/menu/menu";
import Footer from "@/app/components/footer/footer";

const categoryOptions = [
  "Entertainment",
  "Food",
  "Travel",
  "Transport",
  "Utility",
  "Shopping",
  "Others",
];

const AddExpensePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    date: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted expense:", formData);
    // You can add API call logic here
  };

  return (
    <div className={styles.pageWrapper}>
      <Menu />
      <div className={styles.breadcrumb}>
          <span>Home</span>
          <span className={styles.separator}>/</span>
          <span>Add Expense</span>
        </div>
      <div className={styles.formWrapper}>
        <h2>Add New Expense</h2>
        <form onSubmit={handleSubmit} className={styles.expenseForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Expense Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Add Expense
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddExpensePage;
