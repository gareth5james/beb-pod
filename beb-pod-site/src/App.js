import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Foot from "./Components/Foot";
import Fees from "./Components/Fees";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import PathNotFound from "./Components/PathNotFound";

function App() {
  const [feesTable, setFeesTable] = useState([]);
  const [productsTable, setProductsTable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {user === "Ann" ? (
          <Route
            path="/admin"
            element={
              <Admin
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                feesTable={feesTable}
                setFeesTable={setFeesTable}
                productsTable={productsTable}
                setProductsTable={setProductsTable}
              />
            }
          />
        ) : null}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/fees"
          element={
            <Fees
              feesTable={feesTable}
              setFeesTable={setFeesTable}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              productsTable={productsTable}
              setProductsTable={setProductsTable}
            />
          }
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/*" element={<PathNotFound />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
