import { useState } from "react";
import { questions } from "./components/mock";
import Result from "./components/result.jsx";
import Game from "./components/game";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    console.log(step, index)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
    setStep(step + 1)
  }

  return (
    <div className=" bg-black flex justify-center py-[18.5%]">
      <div className="w-[500px] rounded-3xl p-10 bg-blue-400 relative">
        {
          step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : 
          <Result correct={correct}/>
        }
        {/* <Result/> */}
      </div>
    </div>
  );
}

export default App;
