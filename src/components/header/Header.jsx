import styled, { createGlobalStyle } from "styled-components";
import Button from "../UI/button/Button";
import { useState } from "react";
import Modal from "../UI/modal/Modal";

function Header({ handleForm, handleUser, userHandle }) {
  const [modal, setModal] = useState();
  const handelModal = () => {
    setModal(true);
  };
  const handleModalOff = () => {
    setModal(false);
  };
  return (
    <>
      <StyleHeader />
      {modal ? (
        <Modal>
          <h1>вы точно хотите выйти?</h1>
          <div className="modal-delete">
            <Button onClick={handleForm}>да</Button>
            <Button className="modaldelete-btn" onClick={handleModalOff}>
              нет
            </Button>
          </div>
        </Modal>
      ) : (
        <header className="header">
          <h1>logo</h1>
          <nav className="nav">
            <a className="nav-a" href="#">
              Правило
            </a>
            <a className="nav-a" href="#">
              Список
            </a>
            <a className="nav-a" href="#">
              Контакты
            </a>
            <a className="nav-a" href="#">
              Друзья
            </a>
            <a className="nav-a" href="#">
              Добавить в друзья
            </a>
          </nav>
          <div className="logoBtn">
            <Button onClick={userHandle}>expenses</Button>
            <Button onClick={handleUser}>user</Button>
            <Button onClick={handelModal}>Войти</Button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
const StyleHeader = createGlobalStyle`
.modaldelete-btn {
  background-color: red ;
}
.modal-delete{
  display: flex;
  margin-top: 20px;
  gap: 30px;
}
.header{
  width: 100vw;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color:slategrey;
  color: white;
  position: sticky;
  top: 0px;
  z-index: 10;
}
.nav-a{
  color: white;
  text-decoration: none;
}
.nav{
  display: flex;
gap: 70px;
}
.logoBtn{
  display: flex;
  gap: 30px;
}
`;
