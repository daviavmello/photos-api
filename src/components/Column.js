import React from "react";
import styled from "styled-components";

export const Column = ({ desktopSize, tabletSize, mobileSize, children }) => {
  return (
    <ColumnStyle
      desktopSize={desktopSize}
      tabletSize={tabletSize}
      mobileSize={mobileSize}
    >
      {children}
    </ColumnStyle>
  );
};

const ColumnStyle = styled.div`
  align-self: center;
  @media (max-width: 767px) {
    width: ${(props) =>
      props.mobileSize ? (props.mobileSize / 12) * 100 : "100"}%;
  }
  @media (min-width: 768px) {
    width: ${(props) =>
      props.tabletSize ? (props.tabletSize / 12) * 100 : "100"}%;
  }
  @media (min-width: 992px) {
    width: ${(props) =>
      props.desktopSize ? (props.desktopSize / 12) * 100 : "100"}%;
  }
`;
