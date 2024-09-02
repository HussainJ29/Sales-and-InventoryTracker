import React from "react";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
       <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
