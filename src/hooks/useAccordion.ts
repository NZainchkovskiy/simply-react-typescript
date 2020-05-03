import React from "react";
import { IAction } from "../model/IAction";
import { ActionType } from "../model/ActionType.enum";

function accordionReducer(openIndexes: number[], action: IAction) {
  switch (action.type) {
    case ActionType.toggleIndex: {
      const closing = openIndexes.includes(action.index);
      return closing
        ? openIndexes.filter((index) => index !== action.index)
        : [...openIndexes, action.index];
    }
    default:
      throw new Error("Unhandled type in accordionReducer: " + action.type);
  }
}

function useAccordion({ reducer = accordionReducer } = {}) {
  const [openIndexes, dispatch] = React.useReducer(reducer, [0]);
  const toggleIndex = (index: number) =>
    dispatch({ type: ActionType.toggleIndex, index });
  return { openIndexes, toggleIndex };
}

export { useAccordion, accordionReducer };
