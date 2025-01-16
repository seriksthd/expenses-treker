import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

import Header from "./components/header/Header";
import { createGlobalStyle } from "styled-components";
import Form from "./components/form/Form";
import Users from "./components/users/Users";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [user, setUser] = useState(false);
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  function handleDelete(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }
  const handleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleUser = () => {
    setUser(true);
  };
  const userHandle = () => {
    setUser(false);
  };
  return (
    <>
      <StyleApp />
      {isFormVisible ? (
        <div>
          <Header
            handleForm={handleForm}
            handleUser={handleUser}
            userHandle={userHandle}
          />
          {user ? (
            <Users />
          ) : (
            <div className="continer-app">
              <div className="app-expenses">
                <NewExpense onAddExpense={handleAddExpense} />
                <Expenses expenses={expenses} handleDelete={handleDelete} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <Form handleForm={handleForm} />
      )}
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
