import React, { Fragment } from "react";
import styled from "styled-components";

import { colors } from "../style/Colors";
import { Description } from "./Description";
import { X } from "react-feather";

export const Modal = ({ obj, isModalOpen, setIsModalOpen }) => {
  return (
    <Fragment>
      {isModalOpen && (
        <Backdrop>
          <ModalWrapper>
            <Row justifyContent="space-between">
              <h3>{obj.title}</h3>
              <CloseIcon onClick={() => setIsModalOpen((state) => !state)} />
            </Row>
            <Description id={obj.id} />
            <ImageContainer>
              <Image src={obj.url} alt={obj.title} />
            </ImageContainer>
          </ModalWrapper>
        </Backdrop>
      )}
    </Fragment>
  );
};

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: initial;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  /* margin-bottom: 6rem; */
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  padding: 2rem;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${colors.light};
  box-shadow: 0px 5px 10px rgba(172, 168, 129, 0.4),
    0px -5px 10px rgba(172, 168, 129, 0.4);
  border-radius: 2rem;

  @media (max-width: 767px) {
    width: 50vw;
    height: 70vh;
  }

  @media (min-width: 768px) {
    width: 70vw;
    height: 50vh;
  }
`;
const ImageContainer = styled.div`
  @media (max-width: 767px) {
    width: 50vw;
  }

  @media (min-width: 768px) {
    width: 30vw;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CloseIcon = styled(X)`
  cursor: pointer;
  color: ${colors.primary};
  min-width: 2rem;
`;
