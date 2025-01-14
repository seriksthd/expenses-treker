import React from "react";
import { createGlobalStyle } from "styled-components";

export default function ExpensesFilter({handleSelected}) {
  return (
    <>
      <GLobalStyle />
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Фильтр по году</label>
          <select onChange={handleSelected}>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>
    </>
  );
}
const GLobalStyle = createGlobalStyle`
    .expenses-filter {
  color: white;
  padding: 0 1rem;
}

.expenses-filter__control {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}

.expenses-filter__control select {
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
}

.expenses-filter__control label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
`;
