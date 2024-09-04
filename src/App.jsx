import React from "react";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";  // Import Dashboard component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="mainContainer">
      <Router>
        <Navbar />
        <div className="container mx-auto mt-8">
          <Routes>
            {/* Define the route for Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Other Routes */}
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
