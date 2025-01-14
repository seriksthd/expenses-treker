import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose} />
      <GlobalStyle />
      <div className="modal" role="dialog" aria-modal="true">
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}
const GlobalStyle = createGlobalStyle`
      .modal {
        padding: 20px;
        background-color: #ffffffbe;
        border: 1px solid black; 
        border-radius: 12px; 
        width: 500px;
        height: 200px;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(130, 130, 131, 0.57);
  z-index: 1;
`;
