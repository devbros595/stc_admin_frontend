import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import { Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignUp/LoginSignup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="admin/*" element={<Admin />} />
            </Routes>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;