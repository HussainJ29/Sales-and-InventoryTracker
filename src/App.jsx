import React from "react";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
