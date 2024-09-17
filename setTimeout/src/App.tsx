import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [message, setMessage] = useState("Sale starts in 10 seconds");
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setMessage(`Sale starts in ${seconds - 1} seconds`);
      } else {
        setMessage("Sale started!");
      }
    }, 1000);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, [seconds]);

  return (
    <div className="container mt-5">
      <div className="alert alert-warning text-center" role="alert">
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default App;
