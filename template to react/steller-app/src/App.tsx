import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header subtitle="hello,I'm" title="James Smith" />
      <About />
      <Footer />
    </div>
  );
}

export default App;
