import React from "react";
import { createGlobalStyle } from "styled-components";

export default function ExpensesDate({ date }) {
  const expenseDate = new Date(date);

  const month = expenseDate.toLocaleString("ru-Us", { month: "long" });
  const day = expenseDate.toLocaleString("ru-Us", { day: "2-digit" });
  const year = expenseDate.getFullYear().toString();

  return (
    <>
      <GlobalStyle />
      <div className="expense-date ">
        <h2 className="container-text__date">{month}</h2>
        <h2 className="expense-date__year">{day}</h2>
        <h2 className="expense-date__day">{year}</h2>
      </div>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
.expense-date {
    display: flex;
    flex-direction: column;
    width: 5.5rem;
    height: 5.5rem;
    border: 1px solid #ececec;
    background-color: #2a2a2a;
    color: white;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
  }
  .container-text__date {
    display: flex;
    align-items: center;
  }
  
  .expense-date__month {
    font-size: 0.75rem;
    font-weight: bold;
  }
  
  .expense-date__year {
    font-size: 0.75rem;
  }
  
  .expense-date__day {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
