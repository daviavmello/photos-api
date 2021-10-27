import React from "react";
import styled from "styled-components";

export const Row = ({ children }) => {
  return <RowStyle>{children}</RowStyle>;
};

export const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
