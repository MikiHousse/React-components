import React from "react";
import { questions } from "./mock";

function Result({correct}) {
    return (
      <div className="result grid">
        <img className="w-[100px] mx-auto pb-2" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2 className=" mx-auto pb-2">Вы отгадали {correct} ответа из {questions.length}</h2>
        <div className="mx-auto">
          <a href="/" className=" bg-emerald-400 px-4 py-2 rounded-xl hover:bg-emerald-200 transition-all">Попробовать снова</a>
        </div>
      </div>
    );
  }

export default Result