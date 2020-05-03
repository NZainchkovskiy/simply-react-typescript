import React from "react";
import "./App.css";
import { Accordion } from "./Accordion";
import { IItem } from "./model/IItem";

const items: IItem[] = [
  {
    id: 0,
    title: "first",
    contents: "first content",
  },
  {
    id: 1,
    title: "second",
    contents: "second content",
  },
  {
    id: 2,
    title: "third",
    contents: "third content",
  },
];

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
