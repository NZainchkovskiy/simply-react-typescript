import React from "react";
import { css } from "emotion";

interface IAccordionButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionButton: React.FC<IAccordionButtonProps> = (props) => {
  return (
    <button
      className={css`
        width: 200px;
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
