import React from "react";
import styled from "styled-components";

export const Input = ({ type, value, onChange, ...rest }) => {
  return <MyInput value={value} onChange={onChange} {...rest} type={type} />;
};
const MyInput = styled.input`
  padding: 15px 20px;
  margin: 10px 0;
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
  width: 340px;
  box-shadow: 1px 2px 15px #2e0f43e3;
  background-color: #fafafa;
  border: none;
  transition: all 0.3s ease;
  &:active {
    background-color: #fafafa;
  }
`;
