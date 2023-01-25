import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const value = { score, setScore };
  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}

function useScore() {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
}

export { ScoreProvider, useScore };
