import "./App.css";
import React from "react";
import Question from "./Question";
import data from "./data";

function App() {
  return (
    <>
      <h2>Main</h2>
      <section className="container">
        {data.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </>
  );
}

export default App;
