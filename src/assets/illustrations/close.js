import React from "react";
import styled from "styled-components";

const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Close = () => (
  <CloseIcon aria-hidden="true">
    <title>icon-01</title>
    <path
      fill="#333333"
      d="M887.132 833.893L560.497 507.258l320.308-320.314c12.085-12.088 12.085-31.67 0-43.757-12.086-12.085-31.684-12.085-43.756 0L516.74 463.5 190.101 136.86c-12.026-12.026-31.535-12.026-43.561 0-12.04 12.026-12.04 31.549 0 43.575L473.173 507.07l-336.267 336.27c-12.08 12.087-12.08 31.669 0 43.755 12.086 12.087 31.677 12.087 43.763 0l336.262-336.267L843.573 877.47c12.026 12.026 31.52 12.026 43.56 0 12.026-12.027 12.026-31.55 0-43.577z"
    />
    <text
      x="0"
      y="1039"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      Created by Park Sung Hyo
    </text>
    <text
      x="0"
      y="1044"
      fill="#000000"
      font-size="5px"
      font-weight="bold"
      font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
    >
      from the Noun Project
    </text>
    ;
  </CloseIcon>
);
