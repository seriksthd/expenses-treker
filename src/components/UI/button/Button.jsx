import styled from "styled-components";

const Button = ({ children, onClick, disabled, ...rest }) => {
  return (
    <MyButton
      className="button"
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </MyButton>
  );
};

export default Button;

const MyButton = styled.button`
  padding: 16px 18px;
  border-radius: 10px;
  background-color: #4a026b;
  border: none;
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  box-shadow: 2px 1px 15px #3b055ee3;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #861ecbbc;
  }
  &:active {
    background: #600a87;
  }
`;
