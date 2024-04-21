import React from "react";
import Signup from "./components/SignUp";
import { AuthProvider } from "./ContextApi/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashBoard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/Password";
import UpdateProfile from "./components/Profile";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full">
        <Router>
          <AuthProvider>
            <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
