import React from "react";
import { useAccordion } from "./hooks/useAccordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionContents } from "./AccordionContents";
import { AccordionButton } from "./AccordionButton";
import { IItem } from "./model/IItem";
import { Direction } from "./model/Direction.enum";

interface IAccordionProps {
  items: IItem[];
}
export const Accordion: React.FC<IAccordionProps> = (props) => {
  const { items } = props;
  const { openIndexes, toggleIndex } = useAccordion();
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={item.title} direction={Direction.horizontal}>
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onClick={() => toggleIndex(index)}
          >
            {item.title} <span>{openIndexes.includes(index) ? "<" : ">"}</span>
          </AccordionButton>
          <AccordionContents isOpen={openIndexes.includes(index)}>
            {item.contents}
          </AccordionContents>
        </AccordionItem>
      ))}
    </div>
  );
};
