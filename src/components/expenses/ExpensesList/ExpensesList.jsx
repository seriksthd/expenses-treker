import React from 'react';
import ExpensesItem from '../expensesItem/ExpensesItem';

export default function ExpensesList({ expenses, handleDelete }) {
  return (
    <div>
      {expenses.map((item) => (
        <ExpensesItem key={item.id} {...item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
