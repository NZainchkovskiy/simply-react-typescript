import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "emotion";

interface IAccordionContentsProps {
  isOpen: boolean;
}

const variants = {
  hidden: { height: 0 },
  visible: { height: "100%" },
};

export const AccordionContents: React.FC<IAccordionContentsProps> = (props) => {
  return (
    <AnimatePresence initial={false}>
      {props.isOpen && (
        <motion.div
          className={css`
            overflow: hidden;
            background-color: lightgray;
          `}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ ease: "easeInOut" }}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
