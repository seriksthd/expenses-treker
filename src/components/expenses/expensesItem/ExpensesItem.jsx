import React, { useState } from "react";
import ExpensesDate from "../expensesDate/ExpensesDate";
import { createGlobalStyle } from "styled-components";
import Button from "../../UI/button/Button";
import Modal from "../../UI/modal/Modal";
export default function ExpensesItem({
  amount,
  date,
  title,
  id,
  handleDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <div className="expense-item">
        <div className="container-text_date ">
          <ExpensesDate date={date} />
          <h2>{title}</h2>
        </div>
        <div className="expense-item_description">
          <Button onClick={handleClick}>delete</Button>
          <div className="expense-item_price">${amount}</div>
        </div>
      </div>
      {isOpen && (
        <Modal handleDelete={handleDelete}>
          <h1>вы точно хотите удалить?</h1>
          <div className="modal-delete">
            <Button onClick={() => handleDelete(id)}>да</Button>
            <Button className="modaldelete-btn" onClick={handleClick}>нет</Button>
          </div>
        </Modal>
      )}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
.modaldelete-btn {
  background-color: red ;
}
.modal-delete{
  display: flex;
  margin-top: 20px;
  gap: 30px;
}
  .expense-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    padding: 0.5rem 1rem;
    margin: 1rem 0.5rem;
    border-radius: 12px;
    background-color: #4b4b4b;
  }

  .expense-item_description {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
  }

  .expense-item h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }

  .expense-item_price {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #40005d;
    border: 1px solid white;
    padding: 0.7rem 1rem;
    border-radius: 12px;
  }

  .container-text_date {
    display: flex;
    align-items: center;
  }

`;
