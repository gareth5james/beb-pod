import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Foot from "./Components/Foot";
import Fees from "./Components/Fees";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
