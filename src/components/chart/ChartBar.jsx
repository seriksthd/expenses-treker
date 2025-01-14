import React from "react";
import styled from "styled-components";

export default function ChartBar({ label, currentPrice, maxPrice }) {
  const fillHeight = (100 * currentPrice) / maxPrice;

  return (
    <StyledChartBar>
      <FilteredMonth>
        <StyledFill priceHeight={fillHeight}></StyledFill>
      </FilteredMonth>
      <StyledText>{label}</StyledText>
    </StyledChartBar>
  );
}

const StyledChartBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FilteredMonth = styled.div`
  width: 30px;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #363636;
  background: #a892ee;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

const StyledFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
  height: ${(props) => props.priceHeight}%; 
`;

const StyledText = styled.p`
  font-size: 0.6rem;
  font-weight: bold;
`;
