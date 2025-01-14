import React, { children } from "react";
import styled from "styled-components";

export default function Card({ children }) {
  return <CardStyle>{children}</CardStyle>;
}
const CardStyle = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 30px 30px;
`;
