import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px
  `,

  large: () => `
    font-size: ${typeScale.header5}
    padding: 16px 24px;
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.header1};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Lora", sans-serif;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColor};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 3px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColorActive};
  border: none;
  color: white;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColorHover};
  border: none;
  color: white;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
