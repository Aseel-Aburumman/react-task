import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import XMLHttpRequestExample from "./components/XMLHttpRequestExample";
import FetchAPIExample from "./components/FetchAPIExample";
import AxiosExample from "./components/AxiosExample";
import Menu from "./components/Menu";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/XMLHttpRequest" element={<XMLHttpRequestExample />} />
          <Route path="/FetchAPI" element={<FetchAPIExample />} />
          <Route path="/Axios" element={<AxiosExample />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
