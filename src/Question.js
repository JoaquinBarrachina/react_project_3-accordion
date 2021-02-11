import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";

const Question = (props) => {
  const { info, title } = props;
  const [answer, setAnswer] = useState(false);
  return (
    <article className="question">
      <h4>{title}</h4>

      {answer ? (
        <FaMinusCircle
          className="toggle-btn"
          onClick={() => setAnswer(!answer)}
        />
      ) : (
        <BsPlusCircleFill
          className="toggle-btn"
          onClick={() => setAnswer(!answer)}
        />
      )}

      {answer ? <p>{info}</p> : ""}
    </article>
  );
};

export default Question;
