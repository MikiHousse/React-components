import React from "react";
import { questions } from "./mock";

const Game = ({step, question, onClickVariant}) => {
    const percentage = Math.round(step / questions.length * 100);
  
    return (
      <>
        <div className=" h-[10px] rounded-3xl bg-teal-100 mb-6">
          <div style={{ width: `${percentage}%` }} className=" h-[100%] rounded-3xl w-[80%] bg-teal-300 transition-all"></div>
        </div>
        <h1 className="m-0 text-white text-4xl pb-4">{question.title}</h1>
        <ul className=" list-none p-0">
          {
            question.variants.map((text, index) => 
            (<li onClick={() => onClickVariant(index)} key={text} className="p-4 text-white border-2 border-gray-100 rounded-xl mb-2 cursor-pointer transition-all hover:bg-slate-100 hover:text-black">{text}</li>))
          }
        </ul>
      </>
    );
  }

export default Game