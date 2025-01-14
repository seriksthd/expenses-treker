import styled, { createGlobalStyle } from "styled-components";
import Button from "../UI/button/Button";

function Header({handleClick}) {
  return (
    <>
      <StyleHeader />
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
        <div>
          <Button className="logoBtn" onClick={handleClick}>Войти</Button>
        </div>
      </header>
    </>
  );
}

export default Header;
const StyleHeader = createGlobalStyle`
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
`;
