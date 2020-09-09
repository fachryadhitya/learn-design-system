import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustrations } from "../assets";
import { PrimaryButton } from "./Button";
import { Close } from "../assets/illustrations/close";

const ModalWrapper = styled.div`
  width: 1042px;
  height: 614px;
  box-shadow: 2px 4px 12px 3px rgba(0, 0, 0, 0.25);
  background-color: "#FFFFFF";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 27px;
  height: 31px;
  padding: 0;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img src={Illustrations.login} alt="login" aria-hidden="true" />
      <SignUpHeader>Sign Up now for better experience!</SignUpHeader>
      <PrimaryButton>Sign Up</PrimaryButton>
      <CloseModalButton aria-label="Close Modal">
        <img src={Illustrations.buttonClose} alt="close button" />
      </CloseModalButton>
    </ModalWrapper>
  );
};
