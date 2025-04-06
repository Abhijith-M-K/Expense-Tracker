
// HomePage.tsx
"use client";
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import styles from "./home.module.scss";
import Menu from "@/app/components/menu/menu";
import Footer from "@/app/components/footer/footer";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00FF", "#FF4081"];

const pieChartData = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Utilities", value: 300 },
  { name: "Shopping", value: 200 },
  { name: "Travel", value: 278 },
  { name: "Others", value: 189 },
];

const lineChartData = [
  { month: "Jan", expense: 400 },
  { month: "Feb", expense: 300 },
  { month: "Mar", expense: 500 },
  { month: "Apr", expense: 200 },
  { month: "May", expense: 700 },
  { month: "Jun", expense: 600 },
  { month: "Jul", expense: 300 },
  { month: "Aug", expense: 800 },
  { month: "Sep", expense: 650 },
  { month: "Oct", expense: 500 },
  { month: "Nov", expense: 750 },
  { month: "Dec", expense: 900 },
];

const HomePage: React.FC = () => {
  const [pieFilter, setPieFilter] = useState("month");
  const [lineFilter, setLineFilter] = useState("2024");

  const handlePieFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPieFilter(e.target.value);
  };

  const handleLineFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLineFilter(e.target.value);
  };

  const sortedExpenses = [...pieChartData].sort((a, b) => b.value - a.value);

  return (
    <div className={styles.homeWrapper}>
        <Menu />
      <div className={styles.homeContainer}>
        <div className={styles.breadcrumb}>
          <span>Home</span>
          <span className={styles.separator}>/</span>
          <span>Dashboard</span>
        </div>

        <div className={styles.header}>
          <h1>Expense Dashboard</h1>
        </div>

        <div className={styles.graphsGrid}>
          <div className={styles.pieChartContainer}>
            <div className={styles.chartHeader}>
              <h2>Current Expense</h2>
              <select value={pieFilter} onChange={handlePieFilterChange}>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sortedExpenses}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name }) => name}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sortedExpenses.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.lineChartContainer}>
            <div className={styles.chartHeader}>
              <h2>Yearly Expense</h2>
              <select value={lineFilter} onChange={handleLineFilterChange}>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="expense" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
