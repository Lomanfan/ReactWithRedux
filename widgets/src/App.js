import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end javascript library/framework.",
  },
  { title: "Why use React?", content: "React can create reusable components." },
  {
    title: "How do you use React?",
    content: "Use command: npx create-react-app your-app",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
