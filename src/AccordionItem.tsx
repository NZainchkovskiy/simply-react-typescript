import React from "react";
import { css } from "emotion";
import { Direction } from "./model/Direction.enum";

interface IAccordionItemProps {
  direction: Direction;
}

export const AccordionItem: React.FC<IAccordionItemProps> = (props) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: ${props.direction === Direction.vertical
          ? "column"
          : "row"};
      `}
    >
      {props.children}
    </div>
  );
};
