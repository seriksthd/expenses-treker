import { useState } from "react";

import { createGlobalStyle } from "styled-components";
import { Input } from "../UI/input/Input";
import Button from "../UI/button/Button";

export const ExpenseForm = ({ handleClick, onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleNewExpense = () => {
    if (!title || !amount || !date) {
      alert("Please enter a new expense");
      return;
    }
    const newExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
      id: Date.now().toString(),
    };
    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <GlobalStyle />
      <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <label>
            Title
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Amount
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <label>
            Date
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className="buttonContainer">
          <Button onClick={() => handleClick()}>Cancel</Button>
          <Button type="submit" onClick={handleNewExpense}>
            Add Expenses
          </Button>
        </div>
      </form>
    </>
  );
};
const GlobalStyle = createGlobalStyle`
.formContainer {
  background-color: #ad9be9;
  border-radius: 12px;
  padding: 30px 40px;
  margin-top: 50px;
  width: 810px;
}

label {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.buttonContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
}

`;
