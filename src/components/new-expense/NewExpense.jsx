import React from "react";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Button from "../UI/button/Button";
import { ExpenseForm } from "./ExpensesForm";

export const NewExpense = ({ onAddExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <GLobalStyle />
      <div className="wrapper-form">
        {isFormOpen ? (
          <ExpenseForm handleClick={handleClick} onAddExpense={onAddExpense} />
        ) : (
          <div className="container-btn">
            <Button onClick={handleClick}>add a new Expense</Button>
          </div>
        )}
      </div>
    </>
  );
};
const GLobalStyle = createGlobalStyle`
.container-btn {
  background-color: #ad9be9;
  height: 100px;
  width: 810px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 50px;
}

.wrapper-form {
  margin-bottom: 20px;
}

`;
