import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

import Header from "./components/header/Header";
import { createGlobalStyle } from "styled-components";

function App() {
  const [expenses, setExpenses] = useState([]);
  console.log("expenses: ", expenses);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  function handleDelete(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  return (
    <>
      <StyleApp />
      <Header />
      <div className="continer-app">
        <div className="app-expenses">
          <NewExpense onAddExpense={handleAddExpense} />
          <Expenses expenses={expenses} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default App;

const StyleApp = createGlobalStyle`
  .app-expenses{
    width: 810px;
  }
  .continer-app{
    width: 100%;
    height: 96vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
