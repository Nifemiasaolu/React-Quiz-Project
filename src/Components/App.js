import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { QuizProvider, useQuiz } from "../Context/QuizContext";

// const SECS_PER_QUESTION = 30;

// const initialState = {
//   questions: [],
//   // 'loading', 'error', 'ready', 'active', 'finished'
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondsRemaining: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "dataReceived":
//       return { ...state, questions: action.payload, status: "ready" };

//     case "dataFailed":
//       return { ...state, status: "error" };

//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondsRemaining: state.questions.length * SECS_PER_QUESTION,
//       };

//     case "completed":
//       return {
//         ...state,
//         status: "finished",
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };
//     case "newAnswer":
//       const curQuestion = state.questions.at(state.index);

//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === curQuestion.correctOption
//             ? state.points + curQuestion.points
//             : state.points,
//       };

//     case "nextQuestion":
//       return {
//         ...state,
//         index: state.index + 1,
//         answer: null,
//       };

//     case "restart":
//       return { ...initialState, questions: state.questions, status: "ready" };
//     // return {
//     //   ...state,
//     //   status: "ready",
//     //   index: 0,
//     //   answer: null,
//     //   points: 0,
//     //   highscore: 0,
//     // };

//     case "tick":
//       return {
//         ...state,
//         secondsRemaining: state.secondsRemaining - 1,
//         status: state.secondsRemaining === 0 ? "finished" : state.status,
//       };

//     default:
//       throw new Error("Action Unknown");
//   }
// }

export default function App() {
  const { status } = useQuiz();
  return (
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />

              <Question />

              <Footer>
                <Timer />
                <NextQuestion />
              </Footer>
            </>
          )}

          {status === "finished" && <FinishScreen />}
        </Main>
      </div>
  );
}

// //
