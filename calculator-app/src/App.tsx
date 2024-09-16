import React, { useState, useReducer, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface CalculatorState {
  input: string;
  result: string;
}

const calculatorReducer = (
  state: CalculatorState,
  action: { type: string; payload?: string }
) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload || "" };
    case "SET_RESULT":
      return { ...state, result: action.payload || "" };
    case "CLEAR":
      return { input: "", result: "" };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(calculatorReducer, {
    input: "",
    result: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.input) {
      try {
        const result = eval(state.input); // Caution: eval should only be used carefully
        dispatch({ type: "SET_RESULT", payload: result.toString() });
      } catch {
        dispatch({ type: "SET_RESULT", payload: "Error" });
      }
    }
  }, [state.input]);

  // Handle button clicks for numbers and operators
  const handleButtonClick = (value: string) => {
    dispatch({ type: "SET_INPUT", payload: state.input + value });
  };

  const handleEqual = () => {
    try {
      const result = eval(state.input);
      dispatch({ type: "SET_RESULT", payload: result.toString() });
    } catch {
      dispatch({ type: "SET_RESULT", payload: "Error" });
    }
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (

      <div style={{ width:"100vw" }} className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h1 className="text-center">Basic Calculator</h1>
              <div className="form-group">
                <input
                  type="text"
                  ref={inputRef}
                  className="form-control form-control-lg mb-3 text-right"
                  value={state.input}
                  placeholder="0"
                  readOnly
                />
              </div>
              <div className="row">
                {/* Number Buttons */}
                {[7, 8, 9].map((num) => (
                  <div className="col-4 mb-2" key={num}>
                    <button
                      className="btn btn-outline-dark btn-lg w-100"
                      onClick={() => handleButtonClick(num.toString())}
                    >
                      {num}
                    </button>
                  </div>
                ))}
              </div>
              <div className="row">
                {[4, 5, 6].map((num) => (
                  <div className="col-4 mb-2" key={num}>
                    <button
                      className="btn btn-outline-dark btn-lg w-100"
                      onClick={() => handleButtonClick(num.toString())}
                    >
                      {num}
                    </button>
                  </div>
                ))}
              </div>
              <div className="row">
                {[1, 2, 3].map((num) => (
                  <div className="col-4 mb-2" key={num}>
                    <button
                      className="btn btn-outline-dark btn-lg w-100"
                      onClick={() => handleButtonClick(num.toString())}
                    >
                      {num}
                    </button>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-4 mb-2">
                  <button
                    className="btn btn-outline-dark btn-lg w-100"
                    onClick={() => handleButtonClick("0")}
                  >
                    0
                  </button>
                </div>
                <div className="col-4 mb-2">
                  <button
                    className="btn btn-outline-dark btn-lg w-100"
                    onClick={handleClear}
                  >
                    C
                  </button>
                </div>
                <div className="col-4 mb-2">
                  <button
                    className="btn btn-outline-dark btn-lg w-100"
                    onClick={handleEqual}
                  >
                    =
                  </button>
                </div>
              </div>
              <div className="row">
                {/* Operator Buttons */}
                {["+", "-", "*", "/"].map((operator) => (
                  <div className="col-3 mb-2" key={operator}>
                    <button
                      className="btn btn-outline-primary btn-lg w-100"
                      onClick={() => handleButtonClick(operator)}
                    >
                      {operator}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-right">
                  <strong>Result: {state.result || "0"}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
