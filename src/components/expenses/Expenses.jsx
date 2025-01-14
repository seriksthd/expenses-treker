import React, { useState } from "react";
import Card from "../UI/card/Card";
import ExpensesFilter from "./expensesFilter/ExpensesFilter";
import Chart from "../chart/Chart";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = ({ expenses, handleDelete }) => {
  const [filterByYear, setFilterByYear] = useState("2025");

  const handleSelected = (e) => {
    setFilterByYear(e.target.value);
  };

  const filteredExpenses = expenses.filter((item) => {
    const year = item.date.getFullYear().toString();
    return year === filterByYear;
  });

  return (
    <div>
      <Card>
        <ExpensesFilter handleSelected={handleSelected} />
        <Chart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} handleDelete={handleDelete} />
      </Card>
    </div>
  );
};

export default Expenses;

