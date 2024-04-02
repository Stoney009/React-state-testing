import React, { useState } from "react";
import Box from "./Box";

const App = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      hide: true,
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      hide: true,
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      hide: true,
    },
    {
      id: 4,
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      hide: true,
    },
    {
      id: 5,
      question: "Is it useful?",
      answer:
        "Yes, Lorem Ipsum is useful for design, development, and other graphical purposes.",
      hide: true,
    },
  ]);
  const clickBox = (id) => {
    // console.log("u click", id);
    setFaqs(
      faqs.map((faq) => {
        if (id === faq.id) {
          faq.hide = !faq.hide;
          return faq;
        } else {
          faq.hide = true;
          return faq;
        }
      })
    );
  };

  return (
    <div>
      {faqs.map((task) => (
        <Box
          key={task.id}
          answer={task.answer}
          question={task.question}
          hide={task.hide}
          id={task.id}
          clickBox={clickBox}
        />
      ))}
    </div>
  );
};

export default App;
