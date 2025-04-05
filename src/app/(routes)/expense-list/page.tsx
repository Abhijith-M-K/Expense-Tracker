// ExpenseListPage.tsx
"use client";
import React, { useState } from "react";
import styles from "./expense-list.module.scss";
import Menu from "@/app/components/menu/menu";

interface Expense {
    id: number;
    name: string;
    price: number;
    date: string;
    category: string;
}

const dummyExpenses: Expense[] = [
    { id: 1, name: "Groceries", price: 50, date: "2024-04-01", category: "Food" },
    { id: 2, name: "Bus Pass", price: 20, date: "2024-04-02", category: "Transport" },
    { id: 3, name: "Movie", price: 15, date: "2024-04-02", category: "Entertainment" },
    { id: 4, name: "Electricity Bill", price: 100, date: "2024-04-03", category: "Utilities" },
];

const ExpenseListPage: React.FC = () => {
    const [dateFilter, setDateFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const filteredExpenses = dummyExpenses.filter((expense) => {
        return (
            (!dateFilter || expense.date === dateFilter) &&
            (!categoryFilter || expense.category === categoryFilter)
        );
    });

    return (
        <>
            <Menu />
            <div className={styles.expenseListWrapper}>
                <div className={styles.breadcrumb}>
                    <span>Home</span>
                    <span className={styles.separator}>/</span>
                    <span>Expense List</span>
                </div>
                <div className={styles.headerRow}>
                    <h2>Expense List</h2>
                    <button className={styles.addButton}>+ Add Expense</button>
                </div>


                <div className={styles.filters}>
                    <input
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className={styles.dateFilter}
                    />
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className={styles.categoryFilter}
                    >
                        <option value="">All Categories</option>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Utilities">Utilities</option>
                    </select>
                </div>

                <table className={styles.expenseTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredExpenses.map((expense) => (
                            <tr key={expense.id}>
                                <td>{expense.name}</td>
                                <td>${expense.price}</td>
                                <td>{expense.date}</td>
                                <td>{expense.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default ExpenseListPage;
