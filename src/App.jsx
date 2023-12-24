import React from "react";
import { Home, Logged } from "./index";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <button>
        Clike
        <Link to="./pages/logged.jsx"> me</Link>
      </button>
      {/* <Logged/> */}

      {/* The main component */}
      <main>
        <Routes>
          <Route path="./pages/logged.jsx" element={<Logged />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
